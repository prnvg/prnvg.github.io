import React from "react"

import Card from 'react-bootstrap/Card'


class SkillCard extends React.Component {
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
      <div className="p-2 col-lg-2 col-md-4 col-sm-12" onClick={() => this.handleClick()}>
          <Card className="shadow">

              <Card.Body >
              <div >
                <Card.Img src={this.props.image} height={"148em"} />
                <Card.Title>
                  {this.props.title}
                </Card.Title>
                <Card.Text>
                <div className="mt-2" hidden={!this.state.clicked}>
                  <ul>
                    {this.props.points.map(r => (<li>{r}</li>))}
                  </ul>
                </div>

                </Card.Text>
                </div>

              </Card.Body>


          </Card>
      </div>
  )
}
}


export default SkillCard
