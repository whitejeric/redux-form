import React from 'react';
import {Modal, Button, Thumbnail,
        Grid, Col} from 'react-bootstrap';

const files = [
  'Abraham_Lincoln', 'Alexander_Hamilton', 'Babbage',
  'Benjamin_Franklin', 'Daniel_Webster', 'George_Washington',
  'Henry_Clay', 'John_Hancock', 'John_Jay',
  'John_Quincy_Adams', 'Samual_Adams', 'Thomas_Jefferson',
  'William_Seward'
];

const PictureSelector = (props) => {
  const photoThumb = {
    position: 'relative',
    width: '100px',
    height: '100px',
    float: 'left',
    overflow: 'hidden'
  };

  const center = {
    marginLeft: '3%'
  };

  return (
    <div>
      <Modal
        show={props.showState}
        onHide={props.closeFunc}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Select client photo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={center}>
          <Grid fluid>
            {files.map(function(file){
              return (
                <Col key={file} onClick={
                    () =>{
                      props.closeFunc();
                      props.selectFunc('../resources/images/' + file + '.png');
                    }
                  }>
                  <Thumbnail href='#' src={'../resources/images/' + file + '.png'} style={photoThumb}/>
                </Col>
              )
            })}
        </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.closeFunc}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default PictureSelector;
