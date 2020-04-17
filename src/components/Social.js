import React, { Component } from 'react';
import { FaGithub, FaFacebook, FaMedium, FaInstagram, FaLinkedin } from "react-icons/fa";


class Social extends Component {

    render() {
        return (
            <div className="social" >
              <a href={this.props.data.github} target="_blank"><i><FaGithub hidden={this.props.data.github.length > 0 ? false : true}/></i></a>
              <a href={this.props.data.instagram} target="_blank"><i><FaInstagram /></i></a>
              <a href={this.props.data.facebook} target="_blank"><i><FaFacebook /></i></a>
              <a href={this.props.data.linkedin} target="_blank"><i><FaLinkedin /></i></a>
              <a href={this.props.data.medium} target="_blank"><i><FaMedium /></i></a>
            </div>
            )
        }
    }

export default Social
