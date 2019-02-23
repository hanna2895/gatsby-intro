import React from 'react';
import Layout from '../components/layout';
import { css } from "react-emotion"
import Button from '@material-ui/core/Button';


import './style.css';

export default () => (
    <Layout>
        <div class='container2 animated fadeInUp'>
            <h1>Skills</h1>
            <div class="skills-holder">
                <div class="dev-skills">
                <h4>Web Development</h4>
                    <ul class="skill-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Less / Sass</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Sinatra</li>
                    <li>Rack</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>GraphQL</li>
                    <li>Firebase</li>
                    </ul>
                </div>

                <div class="blog-skills">

                <h4>Blog, Social Media Management, and Graphic Design</h4>
                    <ul class="skill-list">
                    <li>WordPress</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Lightroom</li>
                    <li>Canva</li>
                    <li>Later</li>
                    <li>Crowdfire</li>
                    <li>Facebook and Twitter Advertising</li>
                    <li>Mailchimp</li>
                    </ul>

                    <h4 id="agile">Agile Management</h4>
                    <ul class="skill-list" className={css`
                        flex-wrap: nowrap;
                        justify-content: space-between;
                    `}>
                        <li>Slack</li>
                        <li>Trello</li>
                        <li className={css`
                            margin-right: 10vw;
                        `}>Jira</li>
                    </ul>
                </div>
            </div>

            <div class="links">

                <h4 id="action">See my work in action:</h4>
                <div class="link-list">
                <a href="/content/hannah_werman_february_2019_resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>Resume</Button></a>
                <a href="https://www.linkedin.com/in/hannah-werman/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>LinkedIn</Button></a>
                <a href="https://github.com/hanna2895" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>GitHub</Button></a>
                <a href="https://www.instagram.com/bubu_backpacks/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>Instagram</Button></a>
                <a href="https://twitter.com/bubu_backpacks" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>Twitter</Button></a>
                <a href="https://www.pinterest.com/bubu_backpacks/boards/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small" style={{ marginBottom: '1vh' }}>Pinterest</Button></a>


                </div>
            </div>

            </div>
    </Layout>
)