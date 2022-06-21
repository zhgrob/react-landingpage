import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <Avatar alt="Remy Sharp" src="me.jpg" className="profile-pic"/>

                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>As a third year IT student at the PLMUN (Expected Graduation:  December, 2023), 
	                    I have both in-class and internship experience working as a software engineer(FOR EXAMPLE). Take a look at my "internship" page to see
                            where I have worked, or "projects" to see things I have worked on in class and on my own. Just for fun, check
                            out my *very* amateur photography!
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Borgh Bataclan</span><br />
                                    <span>Phillippines, Muntinlupa
                                    </span><br />
                                    <span>Bataclanborgh_bsit@plmun.edu.ph</span>
                                </p>
                                <Link href="https://github.com/zhgrob">
                                <GitHubIcon style={{ fontSize: 40 }} id="githubIcon"/>
                            </Link>
                            <Link href="https://www.linkedin.com">
                                <LinkedInIcon style={{ fontSize: 45, marginTop: 5 }}/>
                            </Link>
                            </div>
                        
                            {

                            }
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
