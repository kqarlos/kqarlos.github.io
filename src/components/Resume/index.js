import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'
import resume from '../../assets/pdf/CarlosToledo_Resume.pdf';


function Resume() {

    return (

        <div id="resume">

            <main className="sectionContent  p-4 bg-white border font-raleway">

                <div className="row mb-1">
                    <div className="col-md-12 pb-1">
                        <p className="font-weight-bold text-info border-bottom headingText">About Me</p>
                    </div>
                </div>

                <div className="row">
                    <article className="col-12 text-secondary">
                        <img className="rounded float-left pb-1" id="headshot2" src={headshot} alt="Headshot" />
                        <p className="aboutText">
                            Full-Stack Web Developer with a B.S. in Software Engineering and a minor in Mathematics from San
                            Jose State University. I recently graduated from the University of California, Berkeley Extension with
                            a certificate in Full-Stack Web Development. This added new web development skills to my
                            Object-Oriented Programming experience such as Mongo, Express, React, and Node.
                        </p>
                        <p className="aboutText">
                            My experience in hospitality has given me the ability to easily communicate my thought process with
                            peers and to understand the significance of teamwork and collaboration. I am passionate about
                            problem-solving, learning new technologies and developing user-friendly applications, and learning
                            new technologies. I applied my team-collaboration skills when working in different team projects developing
                            full-stack applications. Looking forward to using my technical abilities and software engineering skills
                            to create user-friendly experiences.
                        </p>

                    </article>
                    <div className="col-12 pt-1">
                        <a href={resume} target="_blank" className="btn text-white bg-info contentText float-right" id="aboutBtn">Resume <i className="fas fa-arrow-circle-down"></i></a>
                    </div>
     
                </div>


            </main>
        </div>
    )
}

export default Resume;