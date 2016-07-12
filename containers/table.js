import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {DATA} from '../resources/contact-test';

import {Glyphicon, Image, Button} from 'react-bootstrap';

import {getTableState, pushFormToReduxState, removeContact} from '../actions/index';

class TableSide extends Component{
  constructor(){
    super();
    this.state = {
      edit: true
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

  contactFunction(contact){
    if (!this.state.edit){
      this.props.removeContact(contact);
    }
    else{
      //insert edit
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
    if (!this.state.edit){
      let contactFunction = (contact) => {this.props.removeContact(contact)};
    }
    else{
      let contactFunction = null;
    }

    return(
      <div className='tableHalf'>
        <h2 className='tableHeader'>Contacts: </h2>
        <table className='table table-hover'>
          <tbody>
              <tr>
                <th></th>
                <th>Name</th>
                <th className='contactTableButton' onClick={() => this.setState({edit: !this.state.edit})}><Glyphicon glyph={this.state.edit ? 'pencil' : 'trash'}/></th>
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
                    <td style={textCenter}>{contact.Name.length > 16 ? contact.Name.substring(0, 13) + '...' : contact.Name}</td>
                    <td style={textCenter}>
                      {this.state.edit ?
                        <Glyphicon glyph='chevron-right' /> :
                        <Glyphicon glyph='remove-circle' />}</td>
                  </tr>
                )
              }, this)}
          </tbody>
        </table>

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
  return bindActionCreators({getTableState, pushFormToReduxState, removeContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSide);
