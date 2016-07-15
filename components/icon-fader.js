import React from 'react';

import {Glyphicon, Fade} from 'react-bootstrap';

export default class IconFader extends React.Component {
  render(){
    const styleB = {transform: 'scaleX(-1)'};
    return (
      <span>
          <span><Glyphicon style={styleB} glyph={this.props.bool ? '' :this.props.glyphB}/></span>
          <Fade
            in={this.props.bool}
            timeout={5000}>
            <span><Glyphicon glyph={this.props.bool ? this.props.glyphA : ''} /></span>
          </Fade>
      </span>
    );
  }
}
