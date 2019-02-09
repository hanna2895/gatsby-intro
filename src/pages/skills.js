import React from 'react';
import Layout from '../components/layout';
import { css } from "react-emotion"


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
                <ul class="link-list">
                <li><a href="./content/hannah_werman_august_2018_resume.pdf" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Tech Resume</a></li>
                <li><a href="./content/hannah_werman_august_2018_writing_resume.pdf" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Writing Resume</a></li>
                <li><a href="https://www.linkedin.com/in/hannah-werman/" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/hanna2895" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.bububabkpacks.com" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="https://www.instagram.com/bubu_backpacks/" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com/bubu_backpacks" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.pinterest.com/bubu_backpacks/boards/" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Pinterest</a></li>


                </ul>
            </div>

            </div>
    </Layout>
)