import React, { Component } from 'react';
import usc from '../img/usc.png';
import ggsipu from '../img/ggsipu.png';
import EducationCard from '../components/EducationCard';

class Education extends Component {
    render() {
        return (
            <div className="p-5">
            <h1 className="subtopic">My Education</h1>
            <EducationCard
                degree="Master of Science in Computer Science"
                university="University of Southern California"
                gpa="3.88/4"
                to="May 2020"
                from="August 2018"
                image={usc}
                courses="Analysis of Algorithms, Database Systems, Web Technologies, Data Mining, Natural Language Processing, AR/VR, Applied ML for Games"
            />
            <EducationCard
                degree="Bachelor of Technology in Information Technology"
                university="Guru Gobind Singh Indraprastha University"
                gpa="8.40/10"
                to="July 2018"
                from="August 2014"
                image={ggsipu}
                courses="Algorithms, Web Technologies, Software Engineering, Operating Systems, Artificial Intelligence, Soft Computing"
            />
            </div>
            )
        }
    }

export default Education
