import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = ({ recordName }) => {
    return (<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="m-auto">{recordName}</Navbar.Brand>
      </Container>
    </Navbar>);
  }

export default NavbarComponent