import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {DATA} from '../resources/contact-test';
import FormSide from './form';

import {Glyphicon, Fade, Button,
        Well} from 'react-bootstrap';

import {populateEditPage} from '../actions/index';

class EditSide extends Component{
  constructor(){
    super();
    this.state={
      open: false
    };
  }

  render(){
    console.log(this.props.opened);
    const opened = this.props.opened;
    if (opened){
      var elementWidth = '400px';
    }
    else {
      elementWidth = '0px';
    }
    const size= {
      width: elementWidth
    };
    return(
      <div style={size}>

          <FormSide />

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
  return bindActionCreators({populateEditPage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSide);
