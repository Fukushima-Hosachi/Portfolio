import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter, Routes,  Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Top from "./components/Top";
import Contact from "./components/Contact";
import Works from "./components/Works";

function App(){
    return (
        <BrowserRouter>
            
            <div className="Navbar">
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand as ={Link} to="/Top" >Portfolio</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as ={Link} to="/Home" >Home</Nav.Link>
                            <Nav.Link as ={Link} to="/About" >About</Nav.Link>
                            <Nav.Link as ={Link} to="/Works" >Works</Nav.Link>
                            <Nav.Link as ={Link} to="/Contact" >連絡先</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar><br />
            </div>
        

            <div>
                <Routes>
                    <Route path = "/Portfolio" element ={<Top />}/>
                    <Route path = "/Top" element ={<Top />}/>
                    <Route path = "/About" element ={<About />}/>
                    <Route path = "/Works" element ={<Works />}/>
                    <Route path = "/Home" element ={<Home   />}/>
                    <Route path = "/Contact" element ={<Contact    />}/>
                </Routes>
            </div>

            
        </BrowserRouter>
        
        
    );

    
}






export default App;