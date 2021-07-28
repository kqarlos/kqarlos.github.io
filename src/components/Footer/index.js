import React from 'react';
import './style.css'

function Footer() {

    return (

        <footer className="page-footer font-small stylish-color-dark pt-3">

            {/* <!-- Footer Links --> */}
            <div className="container">

                <div className="row text-md-center  justify-content-md-center contentText text-white">
                   
                    <div className="col-md-4">
                        <a className="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(25, 25, 139)'}} target="_blank"
                            href="https://www.linkedin.com/in/carlos-toledo415/">
                            <i className="fab fa-linkedin-in"></i></a><span className="label">carlos-toledo415</span>
                    </div>

                    <div className="col-md-auto py-2">
                        <a href="mailto:kqarlos415@gmail.com" className="btn headingText footerLink mx-2"
                        style={{backgroundColor: '#4aaaa5', textDecoration: 'none'}}><i
                                className="far fa-paper-plane"></i></a><span className="label">kqarlos415@gmail.com</span>
                    </div>

                    <div className="col-md-3">
                        <a className="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(17, 17, 17)'}} target="_blank"
                            href="https://github.com/kqarlos">
                            <i className="fab fa-github-alt"></i></a><span className="label">kqarlos</span>
                    </div>

                </div>

                <div className="row my-1 text-white text-center contentText">
                    <div className="col-12 ">
                        Bay Area, CA
                    </div>
                </div>

                <hr className="py-0 my-0" />

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center pb-2 contentText text-white">© 2021 Copyright: Carlos T.</div>

            </div>

        </footer>
    )
}

export default Footer;