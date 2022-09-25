import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";


import React from "react";
import About from "./About";


function ColorSchemesExample () {
  
  return (
      
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand as ={Link} to="/" >Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as ={Link} to="" >Home</Nav.Link>
                <Nav.Link as ={Link} to="/About" >About</Nav.Link>
                <Nav.Link as ={Link} to="/Pricing" >Pricing</Nav.Link>
                <Nav.Link as ={Link} to="/Contact" >連絡先</Nav.Link>
              </Nav>
            </Container>
          </Navbar><br />
        </div>

        <div>
          <Routes>
            <Route path = "/About" element ={<About />}/>
          </Routes>
        </div>

        
      </BrowserRouter>
      
  );

}

export default ColorSchemesExample;