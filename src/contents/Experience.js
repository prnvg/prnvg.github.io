import React, { Component } from 'react';
import usc from '../img/usc.png';
import ggsipu from '../img/ggsipu.png';
import ExperienceCard from '../components/ExperienceCard';
import Button from 'react-bootstrap/Button'


class Experience extends Component {

    constructor(props) {
      super(props)
      this.state = {
        expand: false,
      };
      this.handleExpand = this.handleExpand.bind(this)
      this.handleCollapse = this.handleCollapse.bind(this)
    }

    handleExpand() {
      if(!this.state.expand){
        this.setState({expand: true})
      }
    }

    handleCollapse() {
      if(this.state.expand){
        this.setState({expand: false})
      }
    }


    render() {
      console.log(this.state.expand)
        return (
            <div className="p-2">
            <h1 className="subtopic">{this.props.data.pageTitle}</h1>
            <Button hidden variant="success" onClick={() => this.handleExpand()}>Expand All</Button>{' '}
            <Button hidden variant="danger" onClick={() => this.handleCollapse()}>Collapse All</Button>

            {
                this.props.data.details.map( exp => (
                    <ExperienceCard
                        company={exp.company}
                        title={exp.title}
                        location={exp.location}
                        to={exp.to}
                        from={exp.from}
                        image={exp.image}
                        points={exp.points}
                        clicked= {this.state.expand}
                    />
                )
              )
            }

          </div>
        )
    }
}

export default Experience
