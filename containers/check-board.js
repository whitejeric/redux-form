import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getBoardState, initBoardState, getGameState, initGame} from '../actions/index';

import Board from '../components/board';

class CheckBoard extends Component{
  handleClick(){
    this.props.initBoardState();
    this.props.initGame();

    this.props.getBoardState();
    this.props.getGameState();
  }

  handlePlay(){
    this.props.getGameState();
  }

  render(){
    var gameStart = (this.props.board.length > 0) && (this.props.game.turn > 0);
    var showBoard = '';
    if (!gameStart){
      //do nothing
    }
    else{
      showBoard = (
          <Board board={this.props.board} currentPlayer={this.props.game.player}/>
      )
    }
    return(
      <div className='checkBoard'>
        <h1 className='appHeader'>Checkboard</h1>

        <div className='game-area' onClick={this.handlePlay.bind(this)}>
          {showBoard}
        </div>
        <hr />
        <button onClick={this.handleClick.bind(this)}>{!gameStart ? 'start':'reset'}</button>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    board: state.board,
    game: state.game
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getBoardState, initBoardState, getGameState, initGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoard);
