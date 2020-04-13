import React from "react"

import Card from 'react-bootstrap/Card'


class ExperienceCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    };
    console.log("Constructor: ", this.state.clicked)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount: ", this.state.clicked)
    //this.setState({clicked: this.props.clicked})
    console.log("componentDidMount 2: ", this.state.clicked)
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    console.log(this.props.clicked, this.state.clicked)

    return (
      <div className="p-3" onClick={() => this.handleClick()}>
          <Card className="shadow">

              <Card.Body >
              <div className="row p-3">
                <Card.Img variant="top" className="img-thumbnail col-lg-3 col-md-3 col-sm-12" src={this.props.image} style={{height: "120px"}}/>
              <div className="col-lg-9 col-md-9 col-sm-12 py-0 pr-4 ">
                <Card.Title>
                  <h3 className="expCard">{this.props.company}</h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="ml-0 expCard">
                    <i>{this.props.title}</i>
                  </h4>
                  <div className="float-left">
                    {this.props.from} - {this.props.to}
                  </div>
                  <div className="float-right">
                    {this.props.location}
                  </div>
                  <br />

                </Card.Text>
                </div>
                </div>
                <div className="ml-5 mt-2" hidden={!this.state.clicked}>
                  <ul>
                  {this.props.points.map(r => (<li>{r}</li>))}
                  </ul>
                </div>
              </Card.Body>


          </Card>
      </div>
  )
}
}


export default ExperienceCard
