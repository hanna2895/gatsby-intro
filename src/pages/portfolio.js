import React from 'react';
import Layout from '../components/layout';

import './style.css';

export default () => (
    <Layout>
        <div class="featured">

          <div class="info">
            <h3>Hostel Social (In Progress)</h3>
            <img src="images/hostel-social.png" alt="Hostel Social app"/>

            <p>Hostel Social is a Progressive Web App (PWA) to streamline and improve the hostel experience. Once completed, the app will allow hostel guests to see who they're sharing a room with, view hostel events, and organize outings with other guests. Eventually, the app will include additional personal safety features geared towards solo female travelers.</p>
            <p>I'm currently conducting user and market research to create the best product and user experience. (Survey coming soon)</p>
            <p>This app is built with React, MaterialUI, and Firebase.</p>
            <a href="#" class="btn btn-outline-dark">GitHub</a>
          </div>

        </div>

          <div class="project-holder">

            <div class="project">

              <div class="info">
                <h3>Urban Array (Client Project)</h3>

                <div class="image-holder">
                    <img src="images/urban-array-1.png" alt="Urban Array welcome page"/>
                    <img src="images/urban-array-2.png" class="hidden" alt="Urban Array onboarding page 1"/>
                    <img src="images/urban-array-4.png" class="hidden" alt="Urban Array dashboard"/>
                </div>

                <p>I am currently the lead front-end developer for Urban Array, a blockchain-based non-profit/social enterprise startup with the goal of empowering underserviced communities.</p>
                <p>This app was built alongside a team of developers using React, Redux, Node.js, MongoDB, and Amazon Web Services.</p>
                <p>It is intended to be a project management platform for community development projects such as urban farming and building restoration. The goal is to get a working system that can later be tokenized, as the goal is to reward volunteer efforts with a crypto token that can be redeemed at local businesses for goods and services.</p>
                <p>If you'd like to learn more or get involved, please feel free to reach out!</p>
                <a href="http://54.254.136.138/welcome" target="_blank" class="btn btn-outline-dark">Check It Out</a>
                <a href="https://github.com/urbanarray/UA-Frontend" target="_blank" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/urbanarray/UA-Backend" target="_blank" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>RecommendMe (Client Project)</h3>

                <div class="image-holder">
                    <img src="images/recommendme3.png" class="mobile-hidden" alt="Recommend Me homepage"/>
                    <img src="images/recommendme2.png" class="hidden" alt="RecommendMe Search Page"/>
                </div>

                <p>RecommendMe is a social restaurant recommendation app that allows you to discover new restaurants in your area based on what your friends recommended, and follow people with similar tastes.</p>
                <p>I redesigned the Home, Search, and Feed pages to reflect updates in the RecommendMe iOS app and optimize for the mobile user to increase downloads and signups.</p>
                <p>This app is built with React and deployed using Heroku and Amazon Web Services.</p>
                <a href="http://www.myrecommendme.com" target="_blank" class="btn btn-outline-dark">Check It Out</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>ABC Training</h3>
                <div class="image-holder">
                    <img src="images/ABCTraining1.png" alt="ABC Training landing page"/>
                    <img src="images/ABCTraining2.png" class="hidden" alt="ABC Training admin view"/>
                    <img src="images/ABCTraining3.png" class="hidden" alt="ABC Training client select page"/>
                </div>
                <p>ABC Training is a prototype application designed for companies that need to share documents or other materials with different groups of people (clients, etc.). It is built with a training firm in mind, but can be applied in a wide variety of contexts. You can log in either as a student or as an administrator.</p>
                <p>This app was built using React, Redux, Ruby, Rails, PostgreSQL, and Material UI in two, two-week sprints.</p>
                <p>Updates will include the ability to batch upload documents and users to streamline the workflow on the administrator's side. Additional analytics and administrator-side dashboard features are forthcoming.</p>
                <p>You can log in and check out the admin functionality using the email address hannah@hannah.com and password 12345.</p>
                <a href="https://abc-training-1.herokuapp.com/" target="_blank" class="btn btn-outline-dark">Check It Out</a>
                <a href="https://github.com/hanna2895/ABC-Training" target="_blank" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/hanna2895/ABC-Training-back-end" target="_blank" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>Shoestring</h3>
                <div class="image-holder">
                    <img src="images/Shoestring1.png" alt="Shoestring landing page"/>
                    <img src="images/Shoestring3.png" class="hidden" alt="Shoestring trip view page"/>
                </div>
                <p>Shoestring is a travel budget planning app targeted towards broke millennials. Enter your destination, your dates, your budget, and how much you already have saved to put towards the trip, and the app will track your progress towards your wanderlust goals.</p>
                <p>This app was built using React, Ruby, Sinatra, PostgreSQL, and ReactStrap in a one-week small-group programming sprint. It pulls in data from the Amadeus Travel Innovation Sandbox Flight Low-Fare Search and Hotel Airport Search APIs.</p>
                <p>Updates will include a larger data set, minor bug-fixes, and additional flight booking capabilities. You can log in and check out the full app functionality using the username and password 12345.</p>
                <a href="https://shoestring1.herokuapp.com/" target="_blank" class="btn btn-outline-dark">Check It Out</a>
                <a href="https://github.com/hanna2895/shoestring-front-end" target="_blank" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/zoesreagan/shoestring-sinatra-" target="_blank" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>My Canvas</h3>
                <img src="images/myCanvas.png" alt="MyCanvas login page"/>

                <p>MyCanvas is a mixed-media collage sharing app that allows users to express themselves through music, photos, and poetry.</p>
                <p>Version 1 of this app was built using Express, Node, MongoDB, and Bootstrap in a one-week pair-programming sprint.</p>
                <p>Version 2 of this app allows users to log in using their Spotify account and OAuth and have greater selection over the music played alongside their canvas, as well as address some bug-fixes from V1. It's far from finished but it was a great sandbox to begin playing around with OAuth.</p>
                <a href="https://github.com/hanna2895/MyCanvas-1" target="_blank" class="btn btn-outline-dark">V1 - GitHub</a>
                <a href="https://github.com/hanna2895/MyCanvas" target="_blank" class="btn btn-outline-dark">V2 - GitHub</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>Battle</h3>
                <div class="image-holder">
                    <img src="images/Battle1.png" class="hidden" alt="Battle landing page"/>
                    <img src="images/Battle2.png" alt="Battle view"/>
                </div>
                <p>Fly back and forth across the screen using the arrow keys and use the spacebar to shoot at alien ships to defend the earth from an incoming invasion. The levels get progressively more challenging as you advance, and the alien ships become more difficult to destroy.</p>
                <p>This game was built using HTML5 Canvas, JavaScript, and jQuery in a one-week sprint.</p>
                <a href="https://hanna2895.github.io/BATTLE/" target="_blank" class="btn btn-outline-dark">Play Game</a>
                <a href="https://github.com/hanna2895/BATTLE" target="_blank" class="btn btn-outline-dark">GitHub</a>
              </div>
            </div>
        </div>

        <h3 style={{ marginTop: '10vh' }}>See something you like?</h3>
        <p>Let's talk about your business & tech needs.</p>
        <a href="https://calendly.com/hannah_werman/30min/">Schedule a FREE consultation!</a>
            
    </Layout>
)