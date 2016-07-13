import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Glyphicon, Fade, Button,
        Well, Collapse} from 'react-bootstrap';

import {populateEditPage, getEditState} from '../actions/index';

import ThumbButton from '../components/thumb-button';
import TextInput from '../components/text-input';
import EditTableCell from '../components/edit-table-cell';

class EditSide extends Component{
  constructor(){
    super();
    this.state={
      open: false,
      showEditDetail: false
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
    const fadeWidth={
      width: elementWidth
    };

    const topHalf = {
      width: elementWidth,
      height: '275px'
    }
    return(
      <div style={fadeWidth}>
        <Collapse in={this.props.collapse}>
          <div>
            <Collapse in={this.state.showEditDetail}>
              <div className='subEdit'>
                <form>
                  <input className='subEditInput'/>
                </form>
              </div>
            </Collapse>
            <div style={topHalf}>
              <ThumbButton style='editPicture' onClickFunc= {() => this.props.getEditState()} picture={this.props.edit.Picture} circle={true}/>
            </div>
            <div>
              <div className='editHeader'>
                <h2>{this.props.edit.Name}</h2>
              </div>
                <p className='editSubHeading'>{this.props.edit.Company === '' ? 'No company' : this.props.edit.Company }</p>
              <hr />

              <table className='editTable'>
                <tbody>
                  <tr>
                    <EditTableCell cellSide='Left' glyph='earphone' details={this.props.edit.Phone} onClick={() => this.setState({showEditDetail: true})}/>
                    <EditTableCell cellSide='Right' glyph='envelope' details={this.props.edit.Email} onClick={() => this.setState({showEditDetail: true})} />
                  </tr>
                  <tr>
                    <EditTableCell cellSide='Left' glyph='road' details={this.props.edit.Address} onClick={() => this.setState({showEditDetail: true})} />
                    <EditTableCell cellSide='Right' glyph='list-alt' details={this.props.edit.Notes} onClick={() => this.setState({showEditDetail: true})} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Collapse>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    edit: state.edit
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({populateEditPage, getEditState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSide);
