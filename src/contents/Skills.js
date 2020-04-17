import React, { Component } from 'react';
import usc from '../img/usc.png';
import ggsipu from '../img/ggsipu.png';
import SkillCard from '../components/SkillCard';
import Button from 'react-bootstrap/Button'
import experiences from '../data/experiences.json'


class Skills extends Component {

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
            <div className="row justify-content-center mt-4 p-3">


                {
                    this.props.data.details.map( sk => (
                        <SkillCard
                            className="col-lg-2"
                            title={sk.title}
                            image={sk.image}
                            points={sk.points}
                            clicked= {this.state.expand}
                        />
                    )
                  )
                }
            </div>
          </div>
        )
    }
}

export default Skills
