import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../contents/Home'
import About from '../contents/About'
import Education from '../contents/Education'
import Skills from '../contents/Skills'
import Contact from '../contents/Contact'
import Experience from '../contents/Experience'

class Routes extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <main>
        <Redirect from="/" to={"/"+this.props.data.firstComponent} />
        <Switch>
            <Route path="/" exact/>
            <Route path={"/"+this.props.data.home.tabTitle} component={() => <Home data={this.props.data.home} social={this.props.data.social} />} exact/>
            <Route path={"/"+this.props.data.about.tabTitle} component={() => <About data={this.props.data.about}/>} exact/>
            <Route path={"/"+this.props.data.education.tabTitle} component={() => <Education data={this.props.data.education}/>} exact/>
            <Route path={"/"+this.props.data.experience.tabTitle} component={() => <Experience data={this.props.data.experience}/>} exact/>
            <Route path={"/"+this.props.data.skills.tabTitle} component={() => <Skills data={this.props.data.skills} />} exact/>
            <Route path={"/"+this.props.data.contact.tabTitle} component={() => <Contact data={this.props.data.contact}/>} exact/>
            <Route component={() => (<></>)} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
