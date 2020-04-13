import React, { Component } from 'react';
import Navitem from './Navitem';
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import Routes from './Routes'
import bulb from '../img/electric-light-bulb_1f4a1.png'


class MyNavbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <div>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mynavbar">
              <Navbar.Brand href="/home">Pranav Gupta<img src={bulb} width="25px"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <LinkContainer className="link" to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to="/education"><Nav.Link>Education</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to="/experience"><Nav.Link>Experience</Nav.Link></LinkContainer>
                    <LinkContainer hidden className="link" to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                    <LinkContainer hidden className="link" to="/blog"><Nav.Link>Blog</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to="/skills"><Nav.Link>Skills</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Routes />
            </div>
          )
        }
    }

export default MyNavbar
