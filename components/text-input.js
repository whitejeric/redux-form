import React from 'react';
import {FormGroup, Col, FormControl,
        ControlLabel} from 'react-bootstrap';

export default class TextInput extends React.Component{
  handleChange(e){
    this.props.onChange(e);
  }
  render(){
    const styleLeft = {
      position: 'relative',
      float: 'left',
      width: '20%',
      margin: '0px',
      padding: '0px',
      paddingTop: '5px',
      fontWeight: 'normal'
    };

    const styleRight = {
      position: 'relative',
      float: 'left',
      width: '80%',
      margin: '0px',
      padding: '0px',
      background: 'none',
      color: 'white',
      border: 'none',
      boxShadow: 'white',
      background: 'rgba(0, 0, 0, 0.05)',
      textIndent: '5px'
    };
    var toRender = '';
    if (this.props.type === 'input'){
      toRender = (
        <FormGroup>
          <ControlLabel style={styleLeft}>{this.props.name}:</ControlLabel>
          <FormControl style={styleRight} componentClass={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange.bind(this)}/>
          <br />
        </FormGroup>
      );
    }
    return toRender
  }
}
