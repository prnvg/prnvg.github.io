import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class About extends Component {
    render() {
        return (
            <div className="p-2">
            <h1 className="subtopic">{this.props.data.pageTitle}</h1>

            <div className="p-3" >
                <Card className="shadow">
                  <h4>{this.props.data.salutation}</h4>
                  <h1>{this.props.data.heading}</h1>
                  <h3>{this.props.data.headline}</h3>
                  <br></br>
                  <p>{this.props.data.details}</p>
                </Card>
            </div>

            </div>
            )
        }
    }

export default About
