import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {DATA} from '../resources/contact-test';

import {Glyphicon, Image, Button} from 'react-bootstrap';

import {getTableState, pushFormToReduxState} from '../actions/index';

class TableSide extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.fillTable();
  }
  fillTable(){
    this.props.getTableState();
    var test = DATA.clients.map(function(contact){
      console.log(contact);

      this.props.pushFormToReduxState(contact);
    }, this);
  }
  render(){
    const textCenter = {
      textAlign: 'center'
    };

    const removeButton = {
      background: 'transparent',
    };

    return(
      <div className='tableHalf'>
        <h2 className='tableHeader'>Your contacts: </h2>
        <table className='table table-hover'>
          <tbody>
            <tr>
              <th style={textCenter}><Glyphicon glyph='user'/></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Address</th>
              <th>Notes</th>
              <th><Glyphicon glyph='trash'/></th>
            </tr>
              {this.props.table.map(function(contact){
                return(
                  <tr key={contact.Name}>
                    <td style={textCenter}><Image src={contact.Picture} width='40px' justified circle/></td>
                    <td>{contact.Name}</td>
                    <td>{contact.Phone}</td>
                    <td>{contact.Email}</td>
                    <td>{contact.Company}</td>
                    <td>{contact.Address}</td>
                    <td>{contact.Notes}</td>
                    <td style={removeButton}><Glyphicon glyph='remove'/></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    table: state.table,
    form: state.form
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTableState, pushFormToReduxState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSide);
