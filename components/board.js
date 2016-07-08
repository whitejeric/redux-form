import React from 'react';
import CheckSquare from '../containers/check-square';

export default (props) => {
  return(
    <table className='checkTable'>
      <tbody>
        <tr>
          <td><CheckSquare num='0' label={props.board[0]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='1' label={props.board[1]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='2' label={props.board[2]} symbol={props.currentPlayer}/></td>
        </tr>
        <tr>
          <td><CheckSquare num='3' label={props.board[3]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='4' label={props.board[4]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='5' label={props.board[5]} symbol={props.currentPlayer}/></td>
        </tr>
        <tr>
          <td><CheckSquare num='6' label={props.board[6]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='7' label={props.board[7]} symbol={props.currentPlayer}/></td>
          <td><CheckSquare num='8' label={props.board[8]} symbol={props.currentPlayer}/></td>
        </tr>
      </tbody>
    </table>
  )
}
