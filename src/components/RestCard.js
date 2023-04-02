import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({item}) {
  return (
    <Link style={{ textDecoration:"none" }} to={`/restaurant/${item.id}`}>
      <Card style={{ width: '400px' }} className='cardView mt-5 mb-2 ms-3'>
        <Card.Img variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <b>Cusine : </b>{item.cuisine_type}
          </Card.Text>
            {item.neighborhood}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestCard