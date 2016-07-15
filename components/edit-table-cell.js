import React from 'react';

import IconFader from './icon-fader';
import IconButton from './icon-button';

export default class EditTableCell extends React.Component {
  constructor(){
    super();
    this.state={
      showDetailGlyph: true,
      holdGlyphState: true,
      mouseOverRollBack: false
    };
  }
  render(){
    var pencilStyle= {
      position: 'absolute',
      zIndex: '1000',
      marginLeft: '310px',
      pointerEvents: 'none',
      marginTop: '8px',
      color: 'rgba(255, 255, 255,0.7)'
    }
    return (
        <td className='editTableCell'>

            <IconFader glyphA={this.props.glyph} bool={true}/>
            <span>
              <input
                className='editTableCellInput'
                value={this.props.details}
                onMouseEnter={() => this.setState({showDetailGlyph: false})}
                onMouseLeave={() => this.setState({showDetailGlyph: true})}
                onChange={this.props.handleChange.bind(this)}
                onFocus={() => this.setState({holdGlyphState: false})}
                onBlur={() => this.setState({holdGlyphState: true})}
                placeholder='Nothing here!'
                />
              <IconButton glyphOnStyle={pencilStyle} glyphOn='pencil' glyphOff='' glyphChangeBool={!(this.state.showDetailGlyph && this.state.holdGlyphState)}/>
            </span>
            <IconButton
              glyphOff='record'
              glyphOn='repeat'
              glyphOffStyle={{color: 'rgba(255, 255, 255, 0.2)'}}
              glyphOnStyle={{transform: 'scaleX(-1)', cursor: 'pointer'}}
              style={{float: 'right', marginRight: '20px'}}
              onClick={this.props.rollBack.bind(this)}
              glyphChangeBool={this.props.edited}
              />


        </td>
    );
  }
}
