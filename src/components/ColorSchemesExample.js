import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import React from "react";



class ColorSchemesExample extends React.Component {
  render(){
    return (
      <>
      
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#Navbar">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#連絡先">連絡先</Nav.Link>
            </Nav>
          </Container>
        </Navbar><br />
      </>
    
       
      
    );

  }
 
}

export default ColorSchemesExample;