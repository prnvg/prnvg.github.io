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
              <Navbar.Brand href="/home">{this.props.data.name}<img src={bulb} width="25px"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <LinkContainer className="link" to={"/"+this.props.data.home.tabTitle} hidden={this.props.data.home.hidden}><Nav.Link>{this.props.data.home.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.about.tabTitle} hidden={this.props.data.about.hidden}><Nav.Link>{this.props.data.about.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.education.tabTitle} hidden={this.props.data.education.hidden}><Nav.Link>{this.props.data.education.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.experience.tabTitle} hidden={this.props.data.experience.hidden}><Nav.Link>{this.props.data.experience.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.projects.tabTitle} hidden={this.props.data.projects.hidden}><Nav.Link>{this.props.data.projects.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.blog.tabTitle} hidden={this.props.data.blog.hidden}><Nav.Link>{this.props.data.blog.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.skills.tabTitle} hidden={this.props.data.skills.hidden}><Nav.Link>{this.props.data.skills.tabTitle}</Nav.Link></LinkContainer>
                    <LinkContainer className="link" to={"/"+this.props.data.contact.tabTitle} hidden={this.props.data.contact.hidden}><Nav.Link>{this.props.data.contact.tabTitle}</Nav.Link></LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Routes data={this.props.data}/>
            </div>
          )
        }
    }

export default MyNavbar
