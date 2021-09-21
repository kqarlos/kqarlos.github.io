import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'
import resume from '../../assets/pdf/CarlosToledo_Resume.pdf';


function Resume() {

    return (

        <div id="resume" className="section">

            <main className="sectionContent  p-4 bg-white border font-raleway">

                <div className="row mb-1">
                    <div className="col-md-12 pb-1">
                        <p className="font-weight-bold text-info border-bottom headingText">Resume</p>
                    </div>
                </div>

                <div className="row my-3">

                    <div className="col-2 border-right">About Me</div>
                    <div className="col-4">
                        <p> Vallejo, CA 94590</p>
                        <p>Email: kqarlos415@gmail.com</p>
                        <p>Phone: 415-590-9772</p>
                        <p>LinkedIn: https://www.linkedin.com/in/carlos-toledo415/</p>
                        <p>Github: https://github.com/kqarlos</p>
                        <p>Portfolio: https://kqarlos.github.io</p>
                    </div>
                    <div className="col-2 border-right">Summary</div>
                    <div className="col-4">
                        <p> Full-Stack Web Developer with excellent communication and teamwork skills developed from working in the
                            hospitality industry. Successfully collaborated in teams of 3-5 to develop full-stack applications. Passionate
                            about problem-solving, learning technologies, and developing user-friendly applications. Looking forward to
                            using my technical abilities and software engineering skills to create user-friendly experiences.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2  border-right">Technical Skills</div>
                    <div className="col-10">
                        <p> HTML | CSS | JavaScript | MySQL | Sequelize | OOP | Relational Databases | NoSQL
                        </p>
                        <p>React | ES6 | MongoDB | Mongoose | Express | Node | Handlebars | JSON</p>
                        <p>Tools: Visual Studio Code | Github | Heroku | MongoDB Compass | Git Bash | Bootstrap</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2  border-right">Projects</div>
                    <div className="col-10">

                        <div className="row">
                            <div className="col-12">
                                <p>Tumi Bakery | https://tumibakery.com</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Application developed for Tumi Peruvian Bakery in Vallejo, CA.</p>
                                <p>Built with: MERN Stack, CSS, Bootstrap, Mongoose, SendGrid, Cloudflare</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Election Year | https://github.com/kqarlos/election-year | https://electionyear2020.herokuapp.com/</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Full-stack application that allows users to create an account and search for their
                                    representatives in congress.</p>
                                <p>Built with: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node, Express, Sequelize,
                                    MySQL, Charts.js</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Artiste Affame | https://github.com/kqarlos/artiste-affame | https://artiste-affame.herokuapp.com/</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Application allows users to immerse themselves in the life of a renaissance artist. Users can
                                    play games, draw and share their art.</p>
                                <p>Built with: MERN Stack, CSS, JavaScript, Materialize
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2  border-right">Experience</div>
                    <div className="col-10">

                        <div className="row">
                            <div className="col-6">
                                <p>Virtual Teaching Assistant and Senior Tutor @ Trilogy Education</p>
                            </div>
                            <div className="col-4">
                                <p className="float-right">September 2020 - Present</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Assist students in a Full-Stack Web Development classroom providing instruction, support,
                                    and guidance to students.</p>
                                <p>Conduct 1-on-1 sessions with students attending a Full-Stack Web Development class. Guide
                                    students through concepts and activities for them to apply to their assignments and projects.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p>Server @ Bon Appetit – Oracle Park San Francisco, CA</p>
                            </div>
                            <div className="col-4">
                                <p className="float-right">2016 - 2020</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Worked at a restaurant and bar in a fast-paced, high volume, team-oriented environment.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2  border-right">Education</div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <p>UC Berkeley Extension - San Francisco, CA</p>
                            </div>
                            <div className="col-4">
                                <p className="float-right">February 2020</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Certificate in Full-Stack Web Development</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p>San Jose State University - San Jose, CA</p>
                            </div>
                            <div className="col-4">
                                <p className="float-right">December 2016</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Bachelor of Science in Software Engineering, Mathematics Minor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-1">
                        <a href={resume} target="_blank" className="btn text-white bg-info float-right" id="aboutBtn">Resume <i class="fas fa-arrow-circle-right"></i></a>
                    </div>

                </div>


            </main>
        </div>
    )
}

export default Resume;