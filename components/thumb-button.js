import React from 'react';

import {Thumbnail, Image} from 'react-bootstrap';

import PictureSelector from './picture-selector';

const ThumbButton = (props) => {
  return (
    <div>
      <div className={props.style + 'Container'} onClick={props.onClickFunc}>
        <Image href='#' className={props.style} src={props.picture} circle={props.circle} rounded={props.rounded}/>
      </div>
      <PictureSelector closeFunc={props.closeFunc} selectFunc={props.selectFunc} showState={props.showState} />
    </div>
  );
}

export default ThumbButton;
