import React from 'react';
import './style.css'
import headshot from '../../assets/images/headshot.jpg'

function About() {

    return (

        <div id="welcome">

            <main className="container p-4" id="welcomeContainer">

                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-3" id="headshotContainer">
                        <img className="rounded" id="headshot" src={headshot} alt="Headshot" />
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-9">
                        <div className="row">
                            <div className="col-12">
                                <header className="welcomeH1">I'm Carlos</header>
                            </div>
                            <div className="col-12">
                                <header className="welcomeH2">A Full Stack Web Developer</header>
                            </div>
                            <div className="col-12 pt-1">
                                <a href="#about" className="btn text-white bg-info contentText float-right" id="myWork">About me <i className="fas fa-arrow-circle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div >
    )
}

export default About;