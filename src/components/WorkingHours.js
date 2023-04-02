import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function WorkingHours(wh) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" className="btn btn-light" onClick={() => setModalShow(true)}>
      Working Hours
      </Button>

      <WorkinghourDetail data={wh} 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

function WorkinghourDetail(props) {
    console.log(props.data);
    return (
      <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton className='text-center' >
              {/* <Modal.Title id="contained-modal-title-vcenter" >
                Working Hours
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body className='text-center'>
            <h4><b>Working Hours</b></h4>
            <ListGroup>
                  <ListGroup.Item>Monday : {props.data.wh.Monday} </ListGroup.Item>
                  <ListGroup.Item>Tuesday : {props.data.wh.Tuesday}</ListGroup.Item>
                  <ListGroup.Item>Wednesday : {props.data.wh.Wednesday}</ListGroup.Item>
                  <ListGroup.Item>Thursday : {props.data.wh.Thursday}</ListGroup.Item>
                  <ListGroup.Item>Friday : {props.data.wh.Friday}</ListGroup.Item>
                  <ListGroup.Item>Saturday : {props.data.wh.Saturday}</ListGroup.Item>
                  <ListGroup.Item>Sunday : {props.data.wh.Sunday}</ListGroup.Item>
            </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      </>
    )
  }

export default WorkingHours