import React, { Component } from 'react';
import usc from '../img/usc.png';
import ggsipu from '../img/ggsipu.png';
import ExperienceCard from '../components/ExperienceCard';
import Button from 'react-bootstrap/Button'
import experiences from '../data/experiences.json'


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
            <h1 className="subtopic">My Experience</h1>
            <Button hidden variant="success" onClick={() => this.handleExpand()}>Expand All</Button>{' '}
            <Button hidden variant="danger" onClick={() => this.handleCollapse()}>Collapse All</Button>
            <ExperienceCard
                company= "Koder, Inc"
                title= "Software Engineer Intern"
                location= "Irvine, CA"
                to= "February 2020"
                from= "January 2020"
                image= "https://drive.google.com/uc?id=1zSgsH1SMDYvdsxfF_CnRgXv4-YiCDD93"
                points= {["Designing and developing APIs and web applications using ASP.NET, SQL Server, Postman, Visual Studio."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "Activision Blizzard"
                title= "Software Engineer Co-op"
                location= "Santa Monica, CA"
                from= "May 2019"
                to= "January 2020"
                image= "https://drive.google.com/uc?id=1lrQ3i8W78B8N4xnbwrCcd6T4uwT9ivEx"
                points= {["Optimized a reinforcement learning model designed to send personalized messages to Call of Duty players achieving 700% more increase in average revenue per user and 2300% more increase in engagement (hours per user) as compared to human-based effortby modelling player data with Monte Carlo Tree Search and Multi-Armed Bandit algorithm in python.",
                          "Simulated players’ interaction with messages with accuracy of more than 90% on multiple KPIs by building Random Surfer model, eliminating the need to wait for players to generate data.",
                          "Prepared dataset for utilization in statistical modeling for fraud detection by querying, cleaning, and organizing large volumes of data from a Hive data warehouse and examining it to find hidden patterns."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "University of Southern California"
                title= "Course Grader"
                location= "Los Angeles, CA"
                to= "May 2019"
                from= "September 2018"
                image= "https://drive.google.com/uc?id=1rlkXnEUa4_pCxkHkQW_WC6dLVLGIVkbB"
                points= {["Designed and graded homework assignments, exams, and final project for INF 510 - Principles of Programming for Data Science involving web scraping, descriptive analytics, and predictive modeling.",
                          "Held office hours to clarify doubts and provide detailed feedback to 35-40 students."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "DataScribble"
                title= "Co-Founder"
                location= "Delhi, India"
                to= "July 2017"
                from= "December 2018"
                image= "https://drive.google.com/uc?id=1MNgDq8MChs1wQPak8-6ymtx3DEXb4-D5"
                points= {["Led conceptualization, platform creation, content generation, and marketing of an amateur blog on data science and machine learning garnering over 3000 unique readers per month; authored several articles.",
                           "Conducted multiple sessions on introductory data science and machine learning as a guest speaker at premier engineering institutes across India catering to 650 students."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "So Delhi"
                title= "Machine Learning Intern"
                location= "Delhi, India"
                to= "May 2018"
                from= "January 2018"
                image= "https://drive.google.com/uc?id=1KqA8v09QonfDRcZ8OQuVYJ3pik3-ecJt"
                points= {["Built the core recommendation platform increasing reader engagement (read ratio) by 150% by designing collaborative and content-based recommendation systems using SVD and TF-IDF.",
                           "Deployed as a real-time service through Flask connected to MongoDB database."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "Probus Insurance Brokers Ltd"
                title= "Data Sceince Intern"
                location= "Mumbai, India"
                to= "July 2017"
                from= "June 2017"
                image= "https://drive.google.com/uc?id=1s9MpTF0lzzl39nrkCAcHv74BEWmEMNQH"
                points= {["Achieved Risk Scoring of customers to predict most lucrative clients to deal with.",
                          "Performed data preprocessing, feature engineering, and applied various machine learning algorithms like Random Forests, SVM in Python."]}
                clicked= {this.state.expand}
            />

            <ExperienceCard
                company= "PolicyBoss"
                title= "Data Analytics Intern"
                location= "Mumbai, India"
                to= "July 2016"
                from= "June 2016"
                image= "https://drive.google.com/uc?id=1IlG9EwjFah3IaBPkH3tpm1WK4jGGDMfx"
                points= {["Collaborated with MIS division for understanding business and discovering insights from company data.",
                          "Helped in decision making processes by presenting in-depth reports and visualizations about customer-business relations using MS-Excel."]}
                clicked= {this.state.expand}
            />

          </div>
        )
    }
}

export default Experience

// {
//     experiences.experiences.map( exp => (
//         <ExperienceCard
//             company={exp.company}
//             title={exp.title}
//             location={exp.location}
//             to={exp.to}
//             from={exp.from}
//             image={exp.image}
//             points={exp.points}
//         />
//     )
// )
// }
