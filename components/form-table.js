import React from 'react';
import FormSide from '../containers/form';
import TableSide from '../containers/table';

export default class FormTable extends React.Component{
  render(){
    return (
      <div className='wholePage'>
        <FormSide />
        <TableSide />
      </div>
    );
  }
}
