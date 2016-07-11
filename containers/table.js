import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getTableState} from '../actions/index';

class TableSide extends Component{
  render(){
    return(
      <div className='tableHalf'>
        <h2 className='tableHeader'>Your contacts: </h2>
        <table className='table table-hover'>
          <tbody>
            <tr>
              <th>Pic</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Address</th>
              <th>Notes</th>
            </tr>
              {this.props.table.map(function(contact){
                return(
                  <tr key={contact.Name}>
                    <td><img src={contact.Picture} width='40px' height='40px' /></td>
                    <td>{contact.Name}</td>
                    <td>{contact.Phone}</td>
                    <td>{contact.Email}</td>
                    <td>{contact.Company}</td>
                    <td>{contact.Address}</td>
                    <td>{contact.Notes}</td>
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
    table: state.table
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTableState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSide);
