import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBoardState, getSquareIndex, getSquareMark, markSquare, nextTurn} from '../actions/index';

class CheckSquare extends React.Component {
  constructor(){
    super();
    this.state={
      mouseOver: false
    }
  }

  handleClick(){
    if (!this.props.label){
      this.props.markSquare(this.props.num, this.props.symbol);
      this.props.nextTurn();
    }
    else{
      console.log('Invalid move');
    }
  }

  handleMouseOver(){
    const mouse = !this.state.mouseOver;
    this.setState({
      mouseOver: mouse
    });
  }

  render(){
    return(
      <div
        className={'checkSquare mouseOn-' + this.state.mouseOver}
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseOver.bind(this)}
        >
        {this.props.label}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getSquareIndex, getSquareMark, getBoardState, markSquare, nextTurn}, dispatch);
}

export default connect(null, mapDispatchToProps)(CheckSquare);
