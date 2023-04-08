import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark">
    <Container >
        <Navbar.Brand style={{ marginLeft:5,color: "white" }} >
        <img
              alt=""
              src="/pwa-192x192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <Link style={{color:"white",textDecoration:"none"}} to="/">Liga Profesional 2023</Link>
        </Navbar.Brand>
    
    </Container>
    </Navbar>
  )
}

export default NavBar