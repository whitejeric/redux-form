import React, {Component} from 'react';
import {Button, Form, Col,
        Modal, Thumbnail, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getFormState, pushFormToReduxState, getTableState} from '../actions/index';

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
      showPictureSelector: false
    };
  }

  handleChange(name, e){
    var newVal = this.state.values;
    newVal[name] = e.target.value;
    this.setState({
      values: newVal
    });
    //console.log(this.state.values);
  }

  handlePictureSelect(fileName){
    var newVal = this.state.values;
    newVal['Picture'] = fileName;
    this.setState({
      values: newVal
    });
    //console.log(this.state.values);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.pushFormToReduxState(this.state.values);
    this.props.getFormState();
    this.props.getTableState();

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

  render(){
    let closePictureSelector = () => {this.setState({showPictureSelector:false})};

    return(
      <div className='formHalf'>
        <h2 className='formHeader'>Add new contact:</h2>
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

              <TextInput key={5} name='Notes' placeholder='Enter any additional notes on client' type='textarea' value={this.state.values.Notes} onChange={this.handleChange.bind(this, 'Notes')} />
            </div>
            <div className='formButtons'>
              <Button type='submit' className='formButtons'>Submit</Button>
              <Button onClick={this.handleClear.bind(this)} className='formButtons'>Clear</Button>
            </div>

            <PictureSelector closeFunc={closePictureSelector} selectFunc={this.handlePictureSelect.bind(this)} showState={this.state.showPictureSelector} />
          </form>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    form: state.form,
    table: state.table
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getFormState, pushFormToReduxState, getTableState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSide);
