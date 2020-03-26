import React from 'react';
import Layout from '../components/layout';

import './style.css';

// image paths
const edge1 = '/images/portfolio-photos/Edge1.png';
const edge2 = '/images/portfolio-photos/Edge2.png';
const edge3 = '/images/portfolio-photos/Edge3.png';

const takeAction1 = '/images/portfolio-photos/PFATakeAction1.png';
const takeAction2 = '/images/portfolio-photos/PFATakeAction2.png';
const takeAction3 = '/images/portfolio-photos/PFATakeAction3.png';

const ltw1 = '/images/portfolio-photos/PFALightTheWay1.png';
const ltw2 = '/images/portfolio-photos/PFALightTheWay2.png';

const issues1 = '/images/portfolio-photos/PFAIssues1.png';
const issues2 = '/images/portfolio-photos/PFAIssues2.png';

const politIQ1 = '/images/portfolio-photos/politIQ.png';

const urbanArray1 = '/images/portfolio-photos/urban-array-1.png';
const urbanArray2 = '/images/portfolio-photos/urban-array-2.png';
const urbanArray4 = '/images/portfolio-photos/urban-array-4.png';

const recommendme2 = '/images/portfolio-photos/recommendme2.png';
const recommendme3 = '/images/portfolio-photos/recommendme3.png';

const abctraining1 = '/images/portfolio-photos/ABCTraining1.png';
const abctraining2 = '/images/portfolio-photos/ABCTraining2.png';
const abctraining3 = '/images/portfolio-photos/ABCTraining3.png';

const shoestring1 = '/images/portfolio-photos/Shoestring1.png';
const shoestring3 = '/images/portfolio-photos/Shoestring3.png';

const battle1 = '/images/portfolio-photos/Battle1.png';
const battle2 = '/images/portfolio-photos/Battle2.png';



export default () => (
    <Layout>
        <div className="featured">

          <div className="info">
            <h3>Edge - Relational Organizing Tool</h3>
            <div className="image-holder">
              <img src={edge1} alt="Edge state information page"/>
              <img src={edge2} alt="Edge homepage & weekly agenda"/>
              <img src={edge3} alt="Edge network mapping prompts"/>
            </div>

            <p>I was the lead engineer on Edge, the Pete for America campaign's relational organizing tool that contributed to Pete Buttigieg's victory in the 2020 Iowa Caucus.</p>
            <p>The final version of this product came out of several rapid-iteration field studies, and was working towards the goal of creating a tool for volunteers to map their personal networks, mobilize them to connect with the people in their lives, and help us spread a winning message about Pete.</p>
            <p>Edge was a React/Redux frontend built on top of a Python/Django API that integrated with the campaign's main database, and piped data into Civis/VAN so we could track relational volunteers, help drive engagement, and measure success.</p>
            <p>Online organizing is and will continue to be critical in this election cycle, especially in the age of COVID-19. If you want to learn more, share ideas, or chat about the power of relational organizing, please email me at <a href="mailto:hannah.werman@gmail.com">hannah.werman@gmail.com</a></p>
          </div>

        </div>

          <div className="project-holder">

            <h3>Pete for America Campaign Website</h3>

            <div className="project">

              <div className="info">
                <h4>Take Action</h4>
                <div className="image-holder">
                  <img src={takeAction1} alt="Take Action page initial state"/>
                  <img src={takeAction3} alt="Take Action page with Mobilize block expanded"/>
                </div>
                <p>The Pete for America Take Action page was designed to be a one-stop landing page for volunteers at all levels to engage with the campaign.</p>
                <p>This page is comprised of custom CMS blocks to allow users on our content team to update information regularly as campaign priorities shifted.</p>
                <p>This pair-programmed Django/Wagtail CMS page pulls in live user location data based on IP address, and uses that to hit the MobilizeAmerica API to pull in live data about events in the user's area as well as across the country.</p>
              </div>
            </div>

            <div className="project">
              <div className="info">
                <h4>Light the Way</h4>
                <div className="image-holder">
                  <img src={ltw1} alt="Light the Way Description"/>
                  <img src={ltw2} alt="Light the Way Map of States with donation data visualization"/>
                </div>

                <p>Light the Way was an interactive fundraising challenge to visualize grassroots support for Pete Buttigieg across the country. The highest donation in each state illiminated the map based on the donation amount, and the highest donation per zip code was listed in a table at the bottom of the page.</p>
                <p>This game raised ~ $15,000 in three days from organic Twitter and social media traffic, without the help of official campaign promotion.</p>
                <p>It was built in JavaScript inside a Django Wagtail CMS, and pulled donation data from an ActBlue hook using a Django API.</p>
              </div>
            </div>



            <div className="project">
              <div className="info">
                <h4>Issues</h4>
                <div className="image-holder">
                  <img src={issues1} alt="Pete for America Issues Page Hero" />
                  <img src={issues2} alt="Pete for America Issues Page Contextual Capture" />
                </div>
                <p>The Pete for America campaign website was optimized for two things - donations and signups. The Issues page was one of our highest-traffic pages, so we introduced contextual capture as an experiment to monetize the page and increase conversions.</p>
                <p>The top section of the page contains a stylized NGP form that pipes information directly into NGPVAN, where the campaign's data and email teams could easily utilize it.</p>
                <p>This page is built in a Django/Wagtail CMS, and uses advanced HTML/CSS to manipulate an embedded NGP form to seamlessly match our branding and product goals.</p>
              </div>
            </div>



            <div className="project">
              <div className="info">
                <h3>PolitIQ (Client Project)</h3>
                <a href="http://whatsmypolitiq.com" target="_blank">
                  <div className="image-holder">
                    <img src={politIQ1} alt="PolitIQ Homepage"/>
                  </div>
                </a>

                <p>PolitIQ is a current events triva game to help prove once and for all, which political party pays the most attention to the news. Think you've got what it takes? Players take daily quizzes and compete for weekly and monthly cash prizes.</p>
                <p>I was the primary engineer on this product team from the intial WordPress-based game concept phase to creating the full Progressive Web App that it is today.</p>
                <p>This app is built with React, MaterialUI, and Firebase, and is integrated with Mailchimp, Zapier, and PushWoosh APIs to provide email and push notifications and boost user engagement.</p>
                <a href="whatsmypolitiq.com">Play Now!</a>
              </div>
            </div>

            <div class="project">

              <div class="info">
                <h3>Urban Array (Client Project)</h3>

                <div class="image-holder">
                    <img src={urbanArray1} alt="Urban Array welcome page"/>
                    <img src={urbanArray2} class="hidden" alt="Urban Array onboarding page 1"/>
                    <img src={urbanArray4} class="hidden" alt="Urban Array dashboard"/>
                </div>

                <p>I worked as the lead front-end developer and open source project manager for Urban Array, a blockchain-based non-profit/social enterprise startup with the goal of empowering underserviced communities.</p>
                <p>This app was built alongside a team of developers using React, Redux, Node.js, MongoDB, and Amazon Web Services.</p>
                <p>It is intended to be a project management platform for community development projects such as urban farming and building restoration. The goal is to get a working system that can later be tokenized, as the goal is to reward volunteer efforts with a crypto token that can be redeemed at local businesses for goods and services.</p>
                <a href="https://github.com/urbanarray/UA-Frontend" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/urbanarray/UA-Backend" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>RecommendMe (Client Project)</h3>

                <div class="image-holder">
                    <img src={recommendme3} class="mobile-hidden" alt="Recommend Me homepage"/>
                    <img src={recommendme2} class="hidden" alt="RecommendMe Search Page"/>
                </div>

                <p>RecommendMe is a social restaurant recommendation app that allows you to discover new restaurants in your area based on what your friends recommended, and follow people with similar tastes.</p>
                <p>I redesigned the Home, Search, and Feed pages to reflect updates in the RecommendMe iOS app and optimize for the mobile user to increase downloads and signups.</p>
                <p>This app is built with React and deployed using Heroku and Amazon Web Services.</p>
                <a href="http://www.myrecommendme.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Check It Out</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>ABC Training</h3>
                <div class="image-holder">
                    <img src={abctraining1} alt="ABC Training landing page"/>
                    <img src={abctraining2} class="hidden" alt="ABC Training admin view"/>
                    <img src={abctraining3} class="hidden" alt="ABC Training client select page"/>
                </div>
                <p>ABC Training is a prototype application designed for companies that need to share documents or other materials with different groups of people (clients, etc.). It is built with a training firm in mind, but can be applied in a wide variety of contexts. You can log in either as a student or as an administrator.</p>
                <p>This app was built using React, Redux, Ruby, Rails, PostgreSQL, and Material UI in two, two-week sprints.</p>
                <p>Updates will include the ability to batch upload documents and users to streamline the workflow on the administrator's side. Additional analytics and administrator-side dashboard features are forthcoming.</p>
                <p>You can log in and check out the admin functionality using the email address hannah@hannah.com and password 12345.</p>
                <a href="https://abc-training-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Check It Out</a>
                <a href="https://github.com/hanna2895/ABC-Training" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/hanna2895/ABC-Training-back-end" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>Shoestring</h3>
                <div class="image-holder">
                    <img src={shoestring1} alt="Shoestring landing page"/>
                    <img src={shoestring3} class="hidden" alt="Shoestring trip view page" style={{ marginBottom: '11vw' }}/>
                </div>
                <p>Shoestring is a travel budget planning app targeted towards broke millennials. Enter your destination, your dates, your budget, and how much you already have saved to put towards the trip, and the app will track your progress towards your wanderlust goals.</p>
                <p>This app was built using React, Ruby, Sinatra, PostgreSQL, and ReactStrap in a one-week small-group programming sprint. It pulls in data from the Amadeus Travel Innovation Sandbox Flight Low-Fare Search and Hotel Airport Search APIs.</p>
                <p>Updates will include a larger data set, minor bug-fixes, and additional flight booking capabilities. You can log in and check out the full app functionality using the username and password 12345.</p>
                <a href="https://shoestring1.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Check It Out</a>
                <a href="https://github.com/hanna2895/shoestring-front-end" rel="noopener noreferrer" target="_blank" class="btn btn-outline-dark">Front End Code</a>
                <a href="https://github.com/zoesreagan/shoestring-sinatra-" rel="noopener noreferrer" target="_blank" class="btn btn-outline-dark">Back End Code</a>
              </div>
            </div>

            <div class="project">
              <div class="info">
                <h3>Battle</h3>
                <div class="image-holder">
                    <img src={battle1} class="hidden" alt="Battle landing page"/>
                    <img src={battle2} alt="Battle view"/>
                </div>
                <p>Fly back and forth across the screen using the arrow keys and use the spacebar to shoot at alien ships to defend the earth from an incoming invasion. The levels get progressively more challenging as you advance, and the alien ships become more difficult to destroy.</p>
                <p>This game was built using HTML5 Canvas, JavaScript, and jQuery in a one-week sprint.</p>
                <a href="https://hanna2895.github.io/BATTLE/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Play Game</a>
                <a href="https://github.com/hanna2895/BATTLE" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">GitHub</a>
              </div>
            </div>
        </div>

        <h3 style={{ marginTop: '10vh' }}>See something you like?</h3>
        <p>Let's talk about your business & tech needs.</p>
        <a href="https://calendly.com/hannah_werman/30min/" target="_blank" rel="noopener noreferrer">Schedule a FREE consultation!</a>
            
    </Layout>
)