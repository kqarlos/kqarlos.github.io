import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'

function About() {

    return (

        <div id="welcome">

            <div className="container p-4" id="welcomeContainer">

                <div className="row">
                    <div className="col-sm-3">
                        <img className="rounded" id="headshot" src={headshot} alt="Headshot" />
                    </div>
                    <div className="col-sm-9">
                        <div className="welcomeH1">I'm Carlos</div>
                        <div className="welcomeH2">A Full Stack Web Developer</div>

                        <a href="#about" className="btn text-white bg-info contentText float-right smoothLink" id="myWork">About me <i className="fas fa-arrow-circle-down"></i></a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;