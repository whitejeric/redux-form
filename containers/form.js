import React, {Component} from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getFormState, pushFormToReduxState} from '../actions/index';

import TextInput from '../components/text-input';

class FormSide extends Component{
  constructor(){
    super();
    this.state={
      values: {
        Name: '',
        Company: '',
        Email: '',
        Notes: ''
      }
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

  handleSubmit(e){
    e.preventDefault();
    this.props.pushFormToReduxState(this.state.values);
    this.props.getFormState();

    this.setState({
        values: {
          Name: '',
          Company: '',
          Email: '',
          Notes: ''
        }
    });
  }

  handleClear(){
    this.setState({
        values: {
          Name: '',
          Company: '',
          Email: '',
          Notes: ''
        }
    });
  }

  render(){
    return(
      <div className='formHalf'>
        <h1>Client info:</h1>
        <hr />
        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <TextInput key={0} name='Name' placeholder='Enter client name' type='input' value={this.state.values.Name} onChange={this.handleChange.bind(this, 'Name')}/>
            <TextInput key={1} name='Company' placeholder='Enter clients place of business' type='input' value={this.state.values.Company} onChange={this.handleChange.bind(this, 'Company')} />
            <TextInput key={2} name='Email' placeholder='Enter client email' type='input' value={this.state.values.Email} onChange={this.handleChange.bind(this, 'Email')} />
            <TextInput key={3} name='Notes' placeholder='Enter any additional notes on client' type='textarea' value={this.state.values.Notes} onChange={this.handleChange.bind(this, 'Notes')} />

            <Col md={3}>  &nbsp; </Col>
            <Col md={3}>  <Button block>Select Photo</Button> </Col>
            <Col md={3}>  <Button block onClick={this.handleClear.bind(this)}>Clear</Button>  </Col>
            <Col md={3}>  <Button type='submit' block>Submit</Button> </Col>

        </Form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    form: state.form
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getFormState, pushFormToReduxState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSide);
