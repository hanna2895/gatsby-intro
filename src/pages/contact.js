import React from 'react';
import Layout from '../components/layout';


export default () => (
    <Layout>
        <div class="container animated fadeInUp">
            <div class="hire-content">
                 <h1>Let's talk about <br />what we can build together.</h1>
                <h3>Every business is unique, and that’s why I’m excited to work with you to create a customized package so you get exactly what you need to take your business to the next level.</h3>
                <h3>Services I Offer:</h3>
                <ul class="services">
                    <li>Website and app design & maintenance</li>
                    <li>Email marketing strategy and automation</li>
                    <li>Ghostwriting and content creation</li>
                    <li>Search engine optimization (SEO)</li>
                    <li>Social media management</li>
                 </ul>
                <a href="https://calendly.com/hannah_werman/30min/" class="btn btn-outline-dark btn-lg">Schedule a FREE consultation!</a>
                <h3 style={{ marginTop: '5vh' }}>Available Packages:</h3>
                <ul class="services">
                    <li><span style={{ fontWeight: 'bold' }}>Starter: 10 hours for $350</span><br />Basic site updates (basic redesign, new page or feature, SEO optimization, ad hoc site management, etc.)</li>
                    <li><span style={{ fontWeight: 'bold' }}>Intermediate: 20 hours for $650</span><br/>Adding a new complex feature, upgrading your e-commerce store, content management, full site redesign, etc.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Advanced: 40 hours for $1250</span><br/>Building a new WordPress site or web app from scratch, content management, marketing automation, rebranding, etc.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Ghostwriting: $60/1000 words</span><br/>Topics include anything travel, web development, blockchain, tech, or marketing-related.</li>
                </ul>
                <h3 style={{ marginTop: '5vh' }}>Need More?</h3>
                <ul class="services">
                    <li><span style={{ fontWeight: 'bold' }}>Busy Solopreneur Package: Hourly, as needed</span><br/>"Hannah, please just take over my website! I don't have time to write good content / manage my web presence anymore because my business is growing too quickly!"</li>
                    <li><span style={{ fontWeight: 'bold' }}>Build Me a Custom App</span><br/>Let's talk about what your business goals are and create a customized package that works for you.</li>
                </ul>
            </div>
        </div>
    </Layout>
)