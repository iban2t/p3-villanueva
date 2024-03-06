import * as React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Gallery from "./Gallery"
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
        <div className="spacer"></div>
        <Navbar variant="dark" bg="success" expand="lg" fixed="top">
        <img
              alt="ncf"
              src="/images/ncf.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <Navbar.Brand href="/">  Personal Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#about" >About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        

        <Container fluid>
          <div className="spacer"></div>
          <section id="home">
            <Home />
          </section>
          <div className="spacer"></div>
          <hr />
          <section id="about">
            <About />
          </section>
          <div className="spacer"></div>
          <hr />
          <section id="education">
            <Education />
          </section>
          <div className="spacer"></div>
          <hr />
          <section id="gallery">
            <Gallery />
          </section>
          <div className="spacer"></div>
          <hr />
        </Container>

        <Navbar className="nav" bg="success" variant="dark" expand="xl">
          <Navbar.Brand href="#home">Connect With Me</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: 'white' }}>joivillanueva@gbox.ncf.edu.ph</Navbar.Text>
          </Navbar.Collapse>
          <section id="contact">
            <Contact />
          </section>
        </Navbar>

      </Router>
    </div>
  );
}



export default App;
