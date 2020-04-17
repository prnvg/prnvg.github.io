import React, { Component } from 'react';
import usc from '../img/usc.png';
import ggsipu from '../img/ggsipu.png';
import EducationCard from '../components/EducationCard';

class Education extends Component {
    render() {
        return (
            <div className="p-2">
            <h1 className="subtopic">{this.props.data.pageTitle}</h1>

            {
                this.props.data.details.map( ed => (
                    <EducationCard
                    degree={ed.degree}
                    university={ed.university}
                    gpa={ed.gpa}
                    to={ed.to}
                    from={ed.from}
                    image={ed.image}
                    courses={ed.courses}
                    />
                  )
              )
            }
            </div>
            )
        }
    }

export default Education
