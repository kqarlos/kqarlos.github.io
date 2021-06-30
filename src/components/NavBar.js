import React from 'react';

function NavBar() {

    return (

        <nav class="py-0 navbar sticky-top navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand bg-info text-white font-weight-bold p-3 headingText smoothLink" href="#about">Carlos Toledo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item border-right">
                        <a class="nav-link contentText text-white smoothLink" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item border-right">
                        <a class="nav-link contentText text-white" target="_blank" href="assets/pdf/resume.pdf">Resume</a>
                    </li>
                    <li class="nav-item border-right">
                        <a class="nav-link contentText text-white" target="_blank" href="assets/pdf/cover-letter.pdf">Cover
                            Letter</a>
                    </li>
                    <li class="nav-item border-right">
                        <a class="nav-link headingText text-white" target="_blank" href="https://github.com/kqarlos"><i
                            class="fab fa-github-alt"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link headingText text-white" target="_blank"
                            href="https://www.linkedin.com/in/carlos-toledo415/"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;