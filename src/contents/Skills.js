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
            <div className="p-5">
            <h1 className="subtopic">My Skills</h1>
            <Button variant="success" onClick={() => this.handleExpand()}>Expand All</Button>{' '}
            <Button variant="danger" onClick={() => this.handleCollapse()}>Collapse All</Button>
            <div className="row justify-content-center mt-4">
                <SkillCard
                    className="col-lg-2"
                    title= "Programming Languages"
                    image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTANjWpaoiipVPzuXBeY6ndLXripVV8azcHTvBc318YOfmPgyfg&s"
                    points= {["Python", "C/C++", "Java", "C#", "Gremlin", "HTML", "CSS", "JavaScript"]}
                    clicked= {this.state.expand}
                />

                <SkillCard
                className="col-lg-2"
                    title= "Tools and Frameworks"
                    image= "https://i7.pngguru.com/preview/569/868/936/test-automation-software-testing-software-framework-selenium-automation.jpg"
                    points= {["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Hadoop", "Spark", "Jupyter", "Natural Language ToolKit", "Git"]}
                    clicked= {this.state.expand}
                />

                <SkillCard
                className="col-lg-2"
                    title= "Databases"
                    image= "https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/database_federated_shutterstock_Hermin.jpg"
                    points= {["MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Hive", "Redshift"]}
                    clicked= {this.state.expand}
                />

                <SkillCard
                className="col-lg-2"
                    title= "Cloud Technologies"
                    image= "https://i.pcmag.com/imagery/articles/01nZo4Ot4FUIqaAccrCZGN9-9.fit_scale.size_2698x1517.v1569490627.jpg"
                    points= {["Google Cloud Platform", "Amazon Web Services"]}
                    clicked= {this.state.expand}
                />

                <SkillCard
                className="col-lg-2"
                    title= "Operating Systems"
                    image= "https://betanews.com/wp-content/uploads/2016/08/operating-system.jpg"
                    points= {["MacOS", "Windows", "Linux"]}
                    clicked= {this.state.expand}
                />
            </div>
          </div>
        )
    }
}

export default Skills
