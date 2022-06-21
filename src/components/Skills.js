import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';

class Skills extends Component {      
    render() {
        return (
            <section id="skills">
                <br/>
                <h1>Skills</h1>
                <Container>
                <Chip label="Java" />
                <Chip label="C++" />
                <Chip label="Python" />
		<Chip label="C" />
		<Chip label="Racket" />
                <Chip label="HTML" />
                <Chip label="CSS" />
                <Chip label="JavaScript" />
                <Chip label="ReactJS" />
                <Chip label="Node.js" />
                <Chip label="Typescript" />
                <Chip label="JQuery" />
                <Chip label="SQL" />
                <Chip label="Linux/Ubuntu" />
                <Chip label="Bash" />
                <Chip label="TeaVM" />
                <Chip label="SMTP" />
                <Chip label="Agile" />
                <Chip label="Communication" />
                <Chip label="Leadership" />
                <Chip label="Strong interpersonal skills" />
                </Container>
                <br/>
                <br/>

            </section>
        );
    }
}

export default Skills;
