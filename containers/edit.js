import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Glyphicon, Button,
        Collapse} from 'react-bootstrap';

import {populateEditPage, getEditState, editContactValue, renewContact} from '../actions/index';

import ThumbButton from '../components/thumb-button';
import TextInput from '../components/text-input';
import EditTableCell from '../components/edit-table-cell';

class EditSide extends Component{
  constructor(){
    super();
    this.state={
      open: false,
      showEditDetail: false,
      editedDetails: {
        Name: false,
        Phone: false,
        Email: false,
        Address: false,
        Notes: false,
        Company: false
      }
    };
  }

  handleChange(input, e){
    var id = this.props.edit.id
    var originalContact = this.props.table.filter(function(contact) {
      return contact.id === id;
    })[0];
    this.props.editContactValue(input, e.target.value, originalContact[input]);
  }

  submitSelectedChanges(){
    this.props.renewContact(this.props.edit);
  }

  rollBackChanges(input){
    var id = this.props.edit.id
    var originalContact = this.props.table.filter(function(contact) {
      return contact.id === id;
    })[0];

    this.props.editContactValue(input, originalContact[input], originalContact[input]);
  }

  render(){
    const opened = this.props.opened;
    if (opened){
      var elementWidth = '400px';
    }
    else {
      elementWidth = '0px';
    }
    const fadeWidth={
      width: elementWidth
    };

    const topHalf = {
      width: elementWidth,
      height: '275px'
    }
    var bools = {
      Name: false,
      Phone: false,
      Email: false,
      Company: false,
      Address: false,
      Notes: false,
      Picture: false
    };

    if (this.props.edit.editedBools){
      bools = this.props.edit.editedBools;
    }

    return(
      <div style={fadeWidth}>
        <Collapse in={this.props.collapse}><div>
            <div style={topHalf}>
              <ThumbButton style='editPicture' onClickFunc= {() => this.props.renewContact(this.props.edit)} picture={this.props.edit.Picture} circle={true}/>
            </div>
              <div>
              <table className='editTable'>
                <tbody>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='user'
                      details={this.props.edit.Name}
                      handleChange={this.handleChange.bind(this, 'Name')}
                      edited={bools.Name}
                      rollBack={this.rollBackChanges.bind(this, 'Name')}
                      />
                  </tr>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='earphone'
                      details={this.props.edit.Phone}
                      handleChange={this.handleChange.bind(this, 'Phone')}
                      edited={bools.Phone}
                      rollBack={this.rollBackChanges.bind(this, 'Phone')}/>
                  </tr>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='envelope'
                      details={this.props.edit.Email}
                      handleChange={this.handleChange.bind(this, 'Email')}
                      edited={bools.Email}
                      rollBack={this.rollBackChanges.bind(this, 'Email')}/>
                  </tr>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='briefcase'
                      details={this.props.edit.Company}
                      handleChange={this.handleChange.bind(this, 'Company')}
                      edited={bools.Company}
                      rollBack={this.rollBackChanges.bind(this, 'Company')}/>
                  </tr>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='road'
                      details={this.props.edit.Address}
                      handleChange={this.handleChange.bind(this, 'Address')}
                      edited={bools.Address}
                      rollBack={this.rollBackChanges.bind(this, 'Address')}/>
                  </tr>
                  <tr style={{lineHeight: '200%'}}>
                    <EditTableCell
                      glyph='list-alt'
                      details={this.props.edit.Notes}
                      handleChange={this.handleChange.bind(this, 'Notes')}
                      edited={bools.Notes}
                      rollBack={this.rollBackChanges.bind(this, 'Notes')}/>
                  </tr>
                </tbody>
              </table>
            </div>

          </div></Collapse>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    edit: state.edit,
    table: state.table
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({populateEditPage, getEditState, editContactValue, renewContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSide);
