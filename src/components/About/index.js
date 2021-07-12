import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'

function About() {

    return (

        <div id="about">

            {/* <!-- start grid 1--> */}
            <div class="container p-4 bg-white border content" style={{backgroundImage: `url('assets/images/beanstalk.png')`}}>

                {/* <!-- first row / title --> */}
                <div class="row mb-1">
                    <div class="col-md-12 pb-1">
                        <p class="font-weight-bold text-info border-bottom pb-3 headingText">About Me</p>
                    </div>
                </div>

                {/* <!-- second row / content --> */}
                <div class="row">
                    <div class="col-12 text-secondary">
                        <img class="rounded float-left" id="headshot" src={headshot} alt="Headshot" />
                        <p class="contentText">
                            Full-Stack Web Developer with a B.S. in Software Engineering and a minor in Mathematics from San
                            Jose State University. I recently graduated from the University of California, Berkeley Extension with
                            a certificate in Full-Stack Web Development. This added new web development skills to my
                            Object-Oriented Programming experience such as Mongo, Express, React, and Node.
                        </p>
                        <p class="contentText">
                            My experience in hospitality has given me the ability to easily communicate my thought process with
                            peers and to understand the significance of teamwork and collaboration. I am passionate about
                            problem-solving, learning new technologies and developing user-friendly applications, and learning
                            new technologies. I applied my team-collaboration skills when working in different team projects developing
                            full-stack applications. Looking forward to using my technical abilities and software engineering skills
                            to create user-friendly experiences.
                        </p>








                        <a href="#portfolio" class="btn text-white bg-info contentText float-right smoothLink" id="myWork">My
                            Work <i class="fas fa-arrow-circle-down"></i></a>

                    </div>
                </div>

                {/* <!-- end content --> */}

            </div>
            {/* <!-- end grid 1--> */}
        </div>
    )
}

export default About;