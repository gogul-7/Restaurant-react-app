import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="no image"
              src="https://cdn-icons-png.flaticon.com/512/494/494183.png?w=740&t=st=1678863393~exp=1678863993~hmac=9a0669bf76188734b39ced1f5279cfa9504a452749e44034d1b39cc9d10b23cf"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} &nbsp;
            <span className='mt-2'>RestoFInder</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header