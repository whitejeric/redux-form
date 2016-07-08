import React from 'react';
import {FormGroup, Col, FormControl,
        ControlLabel} from 'react-bootstrap';

export default class TextInput extends React.Component{
  handleChange(e){
    this.props.onChange(e);
  }
  render(){
    return(
      <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>{this.props.name}</Col>
          <Col sm={10}>
            <FormControl componentClass={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange.bind(this)}/>
          </Col>
      </FormGroup>
    );
  }
}
