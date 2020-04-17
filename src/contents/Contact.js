import React, { Component } from 'react';
import Social from '../components/Social';
import Card from 'react-bootstrap/Card'

class Contact extends Component {
    render() {
        return (

            <div className="p-2">
              <h1 className="subtopic">{this.props.data.pageTitle}</h1>

              <div className="p-3" >
                  <Card className="shadow p-2">
                    <h5 hidden={this.props.data.email.length>0 ? false : true}>Email  :   {this.props.data.email}</h5>
                    <h5 hidden={this.props.data.phone.length>0 ? false : true}>Phone  :   {this.props.data.phone}</h5>
                  </Card>
              </div>

            </div>
          )
      }
    }

    export default Contact
