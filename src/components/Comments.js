import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

function Comments(review) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" className="btn btn-light" onClick={() => setModalShow(true)}>
      Reviews
      </Button>

      <CommentDetail data={review} 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
function CommentDetail(props) {
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
            <Modal.Body className='text-center align-center'>
            <h4><b>Reviews</b></h4>
                <Card style={{ border:'30px' }}>
                    <Card.Body>
                    {
                        props.data.review.map(res=>
                            <>
                                <Card.Title>{res.name}</Card.Title>
                                <Card.Text>{res.rating}</Card.Text>
                                <Card.Text>{res.comments}</Card.Text>
                            </>
                        )
                      }
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      </>
    )
  }

export default Comments