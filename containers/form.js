import React, {Component} from 'react';
import {Button, Form, Col,
        Modal, Thumbnail, Image,
        Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getFormState, pushFormToReduxState, getTableState,
        openForm, hideForm} from '../actions/index';

import TextInput from '../components/text-input';
import PictureSelector from '../components/picture-selector';

class FormSide extends Component{
  constructor(){
    super();
    this.state={
      values: {
        Name: '',
        Email: '',
        Company: '',
        Address: '',
        Phone: '',
        Notes: '',
        Picture: '../resources/images/default.jpg'
      },
      showPictureSelector: false,
      formHidden: false
    };
  }

  componentDidMount(){
    this.props.openForm();
  }

  handleChange(input, e){
    var newVal = this.state.values;
    newVal[input] = e.target.value;
    this.setState({
      values: newVal
    });
  }

  handlePictureSelect(fileName){
    var newVal = this.state.values;
    newVal['Picture'] = fileName;
    this.setState({
      values: newVal
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.pushFormToReduxState(this.state.values);
    this.props.getFormState();

    this.setState({
        values: {
          Name: '',
          Email: '',
          Company: '',
          Address: '',
          Phone: '',
          Notes: '',
          Picture: '../resources/images/default.jpg'
        },
        showPictureSelector: false
    });
  }

  handleClear(){
    this.setState({
        values: {
          Name: '',
          Email: '',
          Company: '',
          Address: '',
          Phone: '',
          Notes: '',
          Picture: '../resources/images/default.jpg'
        }
    });
  }

  handleOpen(){
    this.props.openForm();
    this.props.getFormState();
    this.setState({
      formHidden: false
    });
  }

  handleClose(){
    this.props.hideForm();
    this.props.getFormState();
    this.setState({
      formHidden: true
    });
  }

  render(){
    let closePictureSelector = () => {this.setState({showPictureSelector:false})};
    const glyphStyle = {
      position: 'absolute',
      marginTop: '235px'
    };
    var toRender = '';
    if (this.state.formHidden){
      toRender = (
        <div className='formHalfHidden' onClick={this.handleOpen.bind(this)}>
          &nbsp;<Glyphicon glyph='plus' style={glyphStyle} />
        </div>
      );
    }
    else {
      toRender = (
        <div className='formHalf'>
          <h2 className='formHeader'>Add new contact: </h2>
          <hr />

          <div className='formBox'>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className='formTopHalf'>
                <div className='nameAndEmail'>
                  <TextInput key={0} name='Name' placeholder='Enter client name' type='input' value={this.state.values.Name} onChange={this.handleChange.bind(this, 'Name')} />
                  <TextInput key={4} name='Phone' placeholder='Enter clients business phone #' type='input' value={this.state.values.Phone} onChange={this.handleChange.bind(this, 'Phone')} />
                  <TextInput key={1} name='Email' placeholder='Enter client email' type='input' value={this.state.values.Email} onChange={this.handleChange.bind(this, 'Email')} />
                </div>
                <div className='picFloat' onClick={() => this.setState({showPictureSelector: true})}>
                  <Thumbnail href='#' className='picSize' src={this.state.values.Picture} />
                </div>
              </div>
              <div className='companyAndNotes'>
                <TextInput key={2} name='Company' placeholder='Enter clients business' type='input' value={this.state.values.Company} onChange={this.handleChange.bind(this, 'Company')} />
                <TextInput key={3} name='Address' placeholder='Enter clients business address' type='input' value={this.state.values.Address} onChange={this.handleChange.bind(this, 'Address')} />
                <TextInput key={5} name='Notes' placeholder='Enter any additional notes on client' type='input' value={this.state.values.Notes} onChange={this.handleChange.bind(this, 'Notes')} />
              </div>

              <div className='formButtons'>
                <Button onClick={this.handleClear.bind(this)}>Clear</Button>
                <Button type='submit'>Submit</Button>
              </div>

              <PictureSelector closeFunc={closePictureSelector} selectFunc={this.handlePictureSelect.bind(this)} showState={this.state.showPictureSelector} />
            </form>
          </div>
          <div className='closeButton'>
            <Button onClick={this.handleClose.bind(this)}>Close</Button>
          </div>
        </div>
      );
    }
    return toRender
  }
}

function mapStateToProps(state){
  return {
    form: state.form,
    table: state.table
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getFormState, pushFormToReduxState, openForm, hideForm}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSide);
