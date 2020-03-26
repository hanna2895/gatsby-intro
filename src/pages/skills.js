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
                    <li>React</li>
                    <li>Redux</li>

                    <li>HTML5</li>
                    <li>CSS3</li>

                    <li>JavaScript</li>
                    <li>jQuery</li>

                    <li>Node.js</li>
                    <li>Express</li>

                    <li>Python</li>
                    <li>Django / Wagtail</li>

                    <li>MongoDB</li>
                    <li>Mongoose</li>

                    <li>Bootstrap</li>
                    <li>Less / Sass</li>

                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>GraphQL</li>

                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Sinatra</li>

                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>

                    <li>NGPVAN</li>

                    <li>Firebase</li>
                    <li>Amazon Web Services</li>
                    </ul>
                </div>

                <div class="blog-skills">

                <h4>Blog, Social Media Management, and Graphic Design</h4>
                    <ul class="skill-list">
                    <li>Content Writing</li>
                    <li>WordPress</li>
                    <li>Squarespace</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Lightroom</li>
                    <li>Canva</li>
                    <li>Later</li>
                    <li>Crowdfire</li>
                    <li>Twitter Advertising</li>
                    <li>Mailchimp</li>
                    </ul>

                    <h4 id="agile">Agile Management & Remote Work</h4>
                    <ul class="skill-list" className={css`
                        flex-wrap: nowrap;
                        justify-content: space-between;
                    `}>
                        <li>Slack</li>
                        <li>Trello</li>
                        <li>Jira</li>
                        <li>Zoom</li>
                        <li>Google Hangouts</li>
                    </ul>
                </div>
            </div>

            <div class="links">

                <h4 id="action">See more:</h4>
                <div class="link-list">
                    <a href="/content/HannahWermanMarch2020Resume.pdf" target="_blank" rel="noopener noreferrer" className="skill-link">Resume</a>
                    <a href="https://www.linkedin.com/in/hannah-werman/" target="_blank" rel="noopener noreferrer" className="skill-link">LinkedIn</a>
                    <a href="https://github.com/hanna2895" target="_blank" rel="noopener noreferrer" className="skill-link">GitHub</a>
                    <a href="https://www.instagram.com/hanna_codes/" target="_blank" rel="noopener noreferrer" className="skill-link">Instagram</a>
                    <a href="https://twitter.com/hanna_codes" target="_blank" rel="noopener noreferrer" className="skill-link">Twitter</a>

                </div>
            </div>

            </div>
    </Layout>
)