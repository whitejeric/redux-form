import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getTableState} from '../actions/index';

class TableSide extends Component{
  render(){
    return(
      <div className='tableHalf'>

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
