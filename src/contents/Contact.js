import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="p-2">
            <h1 className="subtopic">{this.props.data.pageTitle}</h1>
            <h3>Email  :   {this.props.data.email}</h3>
            <Social />
            </div>
            )
        }
    }

    export default Contact
