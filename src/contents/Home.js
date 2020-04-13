import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/dp.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" staticText="I am" text={['Pranav Gupta', 'a Machine Learning Engineer.', 'a Web Developer.']} speed={100} eraseDelay={700} typingDelay={1000}/>
            <Social />
            </div>
            )
        }
    }

export default Home
