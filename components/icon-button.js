import React from 'react';

import {Glyphicon, Fade} from 'react-bootstrap';

export default class IconButton extends React.Component {
  render(){


    return (
      <span style={{textShadow: '0px 0px 8px rgba(255, 255, 255,0.6)'}}>
      <span style={this.props.style}>

          <span><Glyphicon style={this.props.glyphOffStyle} glyph={this.props.glyphChangeBool ? '' :this.props.glyphOff}/></span>
          <Fade
            in={this.props.glyphChangeBool}
            timeout={5000}>
            <span onClick={() => this.props.onClick()}><Glyphicon style={this.props.glyphOnStyle} glyph={this.props.glyphChangeBool ? this.props.glyphOn : ''} /></span>
          </Fade></span>
      </span>
    );
  }
}
