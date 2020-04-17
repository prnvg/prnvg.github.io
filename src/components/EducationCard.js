import React from "react"

import Card from 'react-bootstrap/Card'


class EducationCard extends React.Component {

  render(){

    return (
      <div className="p-3">
          <Card className="shadow">
            <div className="row p-3">
              <div className="col-lg-2 col-md-3 col-sm-12 justify-content-center">
                <Card.Img variant="top" className="img-thumbnail" src={this.props.image} />
              </div>
              <Card.Body className="col=lg-10 col-md-9 col-sm-12 py-0 pr-4 ">
                <Card.Title>
                  <h3><i>{this.props.degree}</i></h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="ml-0">
                    {this.props.university}
                  </h4>
                  <div className="float-left">
                    {this.props.from} - {this.props.to}
                  </div>
                  <div className="float-right">
                    GPA: {this.props.gpa}
                  </div>
                  <br /> <br />
                  <div className="ml-0 mt-2">
                    <b>Courses:</b> {this.props.courses}
                  </div>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
      </div>
  )
}
}


export default EducationCard
