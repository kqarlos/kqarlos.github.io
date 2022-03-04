import React from 'react';
import './style.css'
import resume from '../../assets/pdf/CarlosToledo_Resume.pdf';


function Resume() {

    return (

        <div id="resume" className="section">

            <main className="sectionContent p-4 bg-white border font-raleway">

                <div className="row mb-1">
                    <div className="col-md-12 pb-1">
                        <p className="font-weight-bold text-info border-bottom headingText">Resume</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-6">
                        <div className="row mb-3">
                            <div className="col-sm-2 col-lg-4 resumeHeader">
                                <div className="row">
                                    <div className="col-sm-12 col-6">
                                        <p>About Me</p>
                                    </div>
                                    <div className="col-sm-12 col-6">
                                        <i className="headingText far fa-address-card"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-10 col-lg-8">
                                <p> Vallejo, CA 94590</p>
                                <p>Email: kqarlos415@gmail.com</p>
                                <p>Phone: 415-590-9772</p>
                                <p><a className="link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/carlos-toledo415/" target="_blank">LinkedIn: https://www.linkedin.com/in/carlos-toledo415/</a></p>
                                <p><a className="link" style={{ textDecoration: 'none' }} href="https://github.com/kqarlos" target="_blank">Github: https://github.com/kqarlos</a></p>
                                <p><a className="link" style={{ textDecoration: 'none' }} href="https://kqarlos.github.io" target="_blank">Portfolio: https://kqarlos.github.io</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row mb-3">
                            <div className="col-sm-2 col-lg-4 resumeHeader">
                                <div className="row">
                                    <div className="col-sm-12 col-6">
                                        <p>Summary</p>
                                    </div>
                                    <div className="col-sm-12 col-6">
                                        <i className="headingText fas fa-user-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10 col-lg-8">
                                <p> Full-Stack Web Developer with excellent communication and teamwork skills developed from working in the
                                    hospitality industry. Successfully collaborated in teams of 3-5 to develop full-stack applications. Passionate
                                    about problem-solving, learning technologies, and developing user-friendly applications. Looking forward to
                                    using my technical abilities and software engineering skills to create user-friendly experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-2  resumeHeader">
                        <div className="row">
                            <div className="col-sm-12 col-6">
                                <p>Technical Skills</p>
                            </div>
                            <div className="col-sm-12 col-6">
                                <i className="headingText fas fa-code"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <p> HTML | CSS | JavaScript | MySQL | Sequelize | OOP | Relational Databases | NoSQL
                        </p>
                        <p>React | ES6 | MongoDB | Mongoose | Express | Node | Handlebars | JSON</p>
                        <p>Tools: Visual Studio Code | Github | Heroku | MongoDB Compass | Git Bash | Bootstrap</p>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-2 resumeHeader">
                        <div className="row">
                            <div className="col-sm-12 col-6">
                                <p>Projects</p>
                            </div>
                            <div className="col-sm-12 col-6">
                                <i className="headingText fas fa-briefcase"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">

                        <div className="row">
                            <div className="col-12">
                                <p>Tumi Bakery | <a className="link" style={{ textDecoration: 'none' }} href="https://tumibakery.com" target="_blank">https://tumibakery.com</a></p>
                            </div>
                            <div className="col-12 ml-5">
                                <p className="textt">Application developed for Tumi Peruvian Bakery in Vallejo, CA.</p>
                                <p>Built with: MERN Stack, CSS, Bootstrap, Mongoose, SendGrid, Cloudflare</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Election Year |
                                    <a className="link" style={{ textDecoration: 'none' }} href="https://github.com/kqarlos/election-year" target="_blank"> https://github.com/kqarlos/election-year</a> |
                                    <a className="link" style={{ textDecoration: 'none' }} href="https://electionyear2020.herokuapp.com/" target="_blank"> https://electionyear2020.herokuapp.com/</a>
                                </p>
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
                                <p>Artiste Affame |
                                    <a className="link" style={{ textDecoration: 'none' }} href="https://github.com/kqarlos/artiste-affame" target="_blank"> https://github.com/kqarlos/artiste-affame</a> |
                                    <a className="link" style={{ textDecoration: 'none' }} href="https://artiste-affame.herokuapp.com/" target="_blank"> https://artiste-affame.herokuapp.com/</a>
                                </p>
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
                    <div className="col-sm-2 resumeHeader">
                        <div className="row">
                            <div className="col-sm-12 col-6">
                                <p>Experience</p>
                            </div>
                            <div className="col-sm-12 col-6">
                                <i className="headingText fas fa-chart-line"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">

                        <div className="row">
                            <div className="col-6">
                                <p>Instructional Specialist and Senior Tutor @ Trilogy Education</p>
                            </div>
                            <div className="col-6">
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
                            <div className="col-6">
                                <p className="float-right">2016 - 2020</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Worked at a restaurant and bar in a fast-paced, high volume, team-oriented environment.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-2 resumeHeader">
                        <div className="row">
                            <div className="col-sm-12 col-6">
                                <p>Education</p>
                            </div>
                            <div className="col-sm-12 col-6">
                                <i className="headingText fas fa-graduation-cap"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-6">
                                <p>UC Berkeley Extension - San Francisco, CA</p>
                            </div>
                            <div className="col-6">
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
                            <div className="col-6">
                                <p className="float-right">December 2016</p>
                            </div>
                            <div className="col-12 ml-5">
                                <p>Bachelor of Science in Software Engineering, Mathematics Minor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-1">
                        <a href={resume} target="_blank" className="btn text-white bg-info float-right" id="aboutBtn">Resume PDF <i className="fas fa-arrow-circle-right"></i></a>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Resume;