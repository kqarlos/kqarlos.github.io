import React from 'react';
import './style.css'

function Footer() {

    return (

        // <!-- Footer -->
        <footer className="page-footer font-small stylish-color-dark pt-3">

            {/* <!-- Footer Links --> */}
            <div className="container text-center">

                {/* <!-- Grid row --> */}


                <div className="row justify-content-md-center contentText text-white">
                    <div className="col col-lg-2">
                        <a className="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(25, 25, 139)'}} target="_blank"
                            href="https://www.linkedin.com/in/carlos-toledo415/">
                            <i className="fab fa-linkedin-in"></i></a>carlos-toledo415
                    </div>

                    <div className="col-md-auto">
                        <a href="mailto:kqarlos415@gmail.com" className="btn headingText footerLink mx-2"
                        style={{backgroundColor: '#4aaaa5', textDecoration: 'none'}}><i
                                className="far fa-paper-plane"></i></a>kqarlos415@gmail.com
                    </div>

                    <div className="col col-lg-2">
                        <a className="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(17, 17, 17)'}} target="_blank"
                            href="https://github.com/kqarlos">
                            <i className="fab fa-github-alt"></i></a>kqarlos
                    </div>




                </div>

                <div className="row my-1 text-white contentText">
                    <div className="col-12 ">
                        Bay Area, CA
                    </div>
                </div>


                <hr className="py-0 my-0" />

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center pb-2 contentText text-white">© 2021 Copyright: Carlos T.</div>
                {/* <!-- Copyright --> */}


            </div>
            {/* <!-- Footer Links --> */}

        </footer>
        // {/* <!-- Footer --> */}
    )
}

export default Footer;