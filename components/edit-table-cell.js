import React from 'react';

import {Glyphicon, Fade} from 'react-bootstrap';
export default class EditTableCell extends React.Component {
  constructor(){
    super();
    this.state={
      editGlyph: false
    };
  }
  render(){
    return (
        <td className={'editTableCell' + this.props.cellSide}
          onMouseEnter={() => this.setState({editGlyph: true})}
          onMouseLeave={() => this.setState({editGlyph: false})}
          onClick={() => this.props.onClick()}>
          <span><Glyphicon glyph={this.state.editGlyph ? 'pencil' : this.props.glyph} /></span>
          <span>
            &nbsp;
            {this.props.details === '' ?
              'n/a' :
              this.props.details}
            </span>

        </td>
    );
  }
}
