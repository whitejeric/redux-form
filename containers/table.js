import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {DATA} from '../resources/contact-test';

import {Glyphicon, Image, Button} from 'react-bootstrap';

import {getTableState, pushFormToReduxState, removeContact} from '../actions/index';

class TableSide extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.fillTable();
  }

  fillTable(){
    var test = DATA.clients.map(function(contact){
      this.props.pushFormToReduxState(contact);
    }, this);
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
      <div className='tableHalf'>
        <h2 className='tableHeader'>Your contacts: </h2>
        <table className='table table-hover visible-desktop'>
          <tbody>
            <tr>
              <th style={textCenter}>&nbsp;</th>
              <th style={textCenter}>Name</th>
              <th style={textCenter}>Phone</th>
              <th style={textCenter}>Email</th>
              <th style={textCenter}>Company</th>
              <th style={textCenter}>Address</th>
              <th style={textCenter}>Notes</th>
              <th style={imgCenter}><Glyphicon glyph='trash'/></th>
            </tr>
              {this.props.table.length < 1 ?
                <tr>
                  <td></td>
                  <td>No contactzs found.</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> : null}
              {this.props.table.map(function(contact){
                return(
                  <tr key={contact.Name}>
                    <td style={imgCenter}><Image src={contact.Picture} width='40px' justified circle/></td>
                    <td style={textCenter}>{contact.Name}</td>
                    <td style={textCenter}>{contact.Phone}</td>
                    <td style={textCenter}>{contact.Email}</td>
                    <td style={textCenter}>{contact.Company}</td>
                    <td style={textCenter}>{contact.Address}</td>
                    <td style={textCenter}>{contact.Notes}</td>
                    <td style={textCenter}><Glyphicon glyph='remove-circle' className='removeContact' onClick={() => this.props.removeContact(contact)}/></td>
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
