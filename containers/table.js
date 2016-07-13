import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {DATA} from '../resources/contact-test';
import EditSide from './edit';

import {Glyphicon, Image, Button,
        Fade} from 'react-bootstrap';

import {getTableState, pushFormToReduxState, removeContact, populateEditPage} from '../actions/index';

class TableSide extends Component{
  constructor(){
    super();
    this.state = {
      edit: true,
      showEditPage: false,
      showEditPageCollapse: false,
      contactBeingEdited: {}
    };
  }

  componentDidMount(){
    this.fillTable();
  }

  fillTable(){
    var test = DATA.clients.map(function(contact){
      this.props.pushFormToReduxState(contact);
    }, this);
  }

  editPage(){
    console.log('showEditPage: ' + this.state.showEditPage);
    this.setState({showEditPage: !showEditPage});
  }

  contactFunction(contact){
    if (!this.state.edit){
        this.props.removeContact(contact);
    }
    else{
        console.log('showEditPage: ' + this.state.showEditPage);
        //if the open edit page != contact then dont close the edit page
        if (contact === this.state.contactBeingEdited){
          this.setState({
            showEditPageCollapse: false,
            showEditPage: false,
            contactBeingEdited: {}
          });
        }
        else {
          this.props.populateEditPage(contact);
          this.setState({
            showEditPageCollapse: true,
            showEditPage: true,
            contactBeingEdited: contact
          });
        }
    }
  }

  render(){
    const imgCenter = {
      textAlign: 'center',
      lineHeight: '200%'
    };

    const textCenter = {
      lineHeight: '250%'
    };


    return(
      <div className='tableAndEdit'>
        <div className='tableHalf'>
          <h2 className='tableHeader'>Contacts: </h2>
          <div className='tableContainer'>
            <table className='table table-hover'>
              <tbody>

                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th className='contactTableButton' onClick={() => this.setState({edit: !this.state.edit, showEditPage: false})}>
                      <Glyphicon glyph={this.state.edit ? 'pencil' : 'trash'}/>
                    </th>
                  </tr>

                  {this.props.table.length < 1 ?
                    <tr>
                      <td></td>
                      <td>No contacts found.</td>
                      <td></td>
                    </tr> : null}

                  {this.props.table.map(function(contact){
                    var d = new Date();
                    var n = d.getTime();
                    return(
                        <tr key={contact.id} className='contactTableButton' onClick={this.contactFunction.bind(this, contact)}>
                          <td style={imgCenter}><Image src={contact.Picture} width='40px' justified circle/></td>
                          <td style={textCenter}>{contact.Name.length > 14 ? contact.Name.substring(0, 12) + '...' : contact.Name}</td>
                          <td style={textCenter}>
                            {this.state.edit ?
                              <Glyphicon glyph='chevron-right' /> :
                              <Glyphicon glyph='remove-circle' />}
                          </td>
                        </tr>
                    )
                  }, this)}
              </tbody>
            </table>
          </div>
        </div>
        <Fade in={(this.state.showEditPage && this.state.edit)} onEntered={() => this.setState({showEditPageCollapse: true})} onExited={() => this.setState({showEditPageCollapse: false})}>
          <div className='editHalf'>
            <EditSide showFunc={this.editPage.bind(this)} opened={(this.state.showEditPageCollapse)} collapse={this.state.showEditPageCollapse}/>
          </div>
        </Fade>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    table: state.table
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTableState, pushFormToReduxState, removeContact, populateEditPage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSide);
