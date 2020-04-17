import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../contents/Home'
import About from '../contents/About'
import Education from '../contents/Education'
import Skills from '../contents/Skills'
import Contact from '../contents/Contact'
import Experience from '../contents/Experience'
import data from '../data/data.json'



class Routes extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <main>
        <Redirect from="/" to="/home" />
        <Switch>
            <Route path="/" component={() => <Home data={data.home} />} exact/>
            <Route path="/home" component={() => <Home data={data.home}/>} exact/>
            <Route path="/about" component={() => <About data={data.about}/>} exact/>
            <Route path="/education" component={() => <Education data={data.education}/>} exact/>
            <Route path="/Experience" component={() => <Experience data={data.experience}/>} exact/>
            <Route path="/skills" component={() => <Skills data={data.skills} />} exact/>
            <Route path="/contact" component={() => <Contact data={data.contact}/>} exact/>
            <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
