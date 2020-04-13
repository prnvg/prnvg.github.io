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
        <Redirect from="/" to="/home" />
        <Switch>
            <Route path="/" component={() => <Home />} exact/>
            <Route path="/home" component={() => <Home />} exact/>
            <Route path="/about" component={() => <About />} exact/>
            <Route path="/education" component={() => <Education />} exact/>
            <Route path="/Experience" component={() => <Experience />} exact/>
            <Route path="/skills" component={() => <Skills />} exact/>
            <Route path="/contact" component={() => <Contact />} exact/>
            <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
