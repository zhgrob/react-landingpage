import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';

class Internships extends Component {
    render() {
        return (
            <section id="internships">
                <h1>Internships</h1>
                <br />

                <li className="jobTitle">Example Company 1 • Software Engineer • September 2022 – December 2022</li>
                    <li className="description">Developing new features to improve user experience in a recently implemented web insurance application using Java and TeaVM</li>
                    <li className="description">Building predictive models to auto-fill questions on forms using neural networks, specifically leveraging Neuroph and Deep Netts Platform</li>
                    <li className="description">Prototyped new architecture model by exploring efficient saving techniques such as debouncing and throttling</li>
		    <li className="description">Built automated test cases using Selenium WebDriver Framework</li>
		 <br/>
                <Divider/>
                <br/>
                <li className="jobTitle">Example Company 2 • Software Engineer • January 2021 – April 2021</li>
                    <li className="description">Developed backend system of globalized insurance application using Vert.x framework, and Java</li>
                    <li className="description">Lead developer on application designed to gamify transactions at Amex accepting merchants using Javascript, ReactJS, npm, NodeJS, SMTP,
                                HTML/CSS. Required backend and frontend development, direct communication with client, and analysis of customer transaction data</li>
                    <li className="description">Automated processes for team – portal for clients to complete information to add to database; worked with Java, JSP, JQuery, SQL, and EAP server</li>
                    <li className="description">Market research for Women in Technology team to better understand goals of membership base and create a plan for team’s 2019 agenda.</li>
                <br/>
                <Divider/>
                <br/>
                <li className="jobTitle">Example Company 3 • Software Developer • May 2021 – August 2021</li>
                    <li className="description">Worked on end to end development of APIs in Java, OAuth authentication, utilizing complex database queries to retrieve data, 
                        applying business logic and using different frameworks to write custom unit and integration tests</li>
                    <li className="description">Worked directly with clients to gather requirements, using technologies such as Java, Angular, MYSQL, HTML/CSS, Maven, Springboot, 
                        and Docker to implement, build and deploy custom software applications</li>
                    <li className="description">Obtained professional training in Agile/Scrum processes through AgileDad course</li>


            </section>
        );
    }
}

export default Internships;
