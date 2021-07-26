import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'

function About() {

    return (

        <div id="welcome">

            {/* <!-- start grid 1--> */}
            <div className="container p-4" id="welcomeContainer">

                <div className="row">
                    <div className="col-3">
                        <img className="rounded" id="headshot" src={headshot} alt="Headshot" />
                    </div>
                    <div className="col-9">
                        <div className="welcomeHeader">I'm Carlos</div>
                        <div className="welcomeHeader2">A Full Stack Web Developer</div>

                        <a href="#about" className="btn text-white bg-info contentText float-right smoothLink" id="myWork">About me <i className="fas fa-arrow-circle-down"></i></a>

                    </div>
                </div>

                {/* <!-- end content --> */}

            </div>
            {/* <!-- end grid 1--> */}
        </div>
    )
}

export default About;