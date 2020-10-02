import React from "react";
import { connect, styled } from "frontity";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Footer = ({ state }) => (
<Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" fixed = "bottom" style ={{paddingBottom: " !important", float: "none", textAlign: "center"}}>
  <Navbar.Brand  href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Nav className="m-auto">
      <img style = {{height: 40, width:40, borderRadius: 100}} src= {require("../assets/default_avatar.png")}></img>
      <Nav.Link href="/contact">User is Logged In.</Nav.Link>
          </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
</Navbar>
);

export default connect(Footer);