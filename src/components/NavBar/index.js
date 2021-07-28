import React from 'react';
import './style.css'
import resume from '../../assets/pdf/resume.pdf';
import coverLetter from '../../assets/pdf/cover-letter.pdf';

function NavBar() {

    return (

        <nav className="py-0 navbar sticky-top navbar-expand-lg navbar-light bg-info font-raleway">
            <a className="navbar-brand text-white font-weight-bold p-3 headingText smoothLink" href="#about">Carlos Toledo</a>
            <button className="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon headingText"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item pl-2">
                        <a className="nav-link navbarText text-white smoothLink" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item pl-2">
                        <a className="nav-link navbarText text-white" target="_blank" href={resume}>Resume</a>
                    </li>
                    <li className="nav-item pl-2">
                        <a className="nav-link navbarText text-white" target="_blank" href={coverLetter}>Cover
                            Letter</a>
                    </li>
                    <li className="nav-item pl-2">
                        <a className="nav-link navbarText text-white" target="_blank" href="https://github.com/kqarlos"><i
                            className="fab fa-github-alt"></i></a>
                    </li>
                    <li className="nav-item pl-2">
                        <a className="nav-link navbarText text-white" target="_blank"
                            href="https://www.linkedin.com/in/carlos-toledo415/"><i className="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;