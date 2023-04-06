import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark">
    <Container >
        <Navbar.Brand style={{ color: "white" }}>
            <Link style={{color:"white",textDecoration:"none"}} to="/">Liga Profesional 2023</Link>
        </Navbar.Brand>

        
        
    </Container>
    </Navbar>
  )
}

export default NavBar