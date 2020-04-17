import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/dp.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
      console.log(this.props.data)
        return (
            <div className="condiv home">
            <img src={this.props.data.image} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" staticText={this.props.data.staticText} text={this.props.data.varyingText} speed={100} eraseDelay={700} typingDelay={1000}/>
            <br/>
            <Social data={this.props.data.social}/>
            </div>
            )
        }
    }

export default Home
