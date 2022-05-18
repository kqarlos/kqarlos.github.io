import React from 'react';
import './style.css'

function Footer() {

    return (

        <footer className="page-footer font-small stylish-color-dark pt-3 font-raleway">

            {/* <!-- Footer Links --> */}
            <div className="container">

                <div className="row text-md-center  justify-content-md-center footerText pb-2 text-white">
                   
                    <div className="col-md-4 py-1"> 
                        <a className="btn footerLink mx-2" style={{backgroundColor: 'rgb(73, 73, 139)'}} target="_blank"
                            rel="noreferrer" href="https://www.linkedin.com/in/carlos-toledo415/">
                            <i className="fab fa-linkedin-in"></i></a><span className="label">carlos-toledo415</span>
                    </div>

                    <div className="col-md-auto py-1">
                        <a href="mailto:kqarlos415@gmail.com" className="btn footerLink mx-2"
                        style={{backgroundColor: '#4aaaa5', textDecoration: 'none'}}><i
                                className="far fa-paper-plane"></i></a><span className="label">kqarlos415@gmail.com</span>
                    </div>

                    <div className="col-md-3 py-1">
                        <a className="btn footerLink mx-2" style={{backgroundColor: 'rgb(48, 48, 48)'}} target="_blank"
                            rel="noreferrer" href="https://github.com/kqarlos">
                            <i className="fab fa-github-alt"></i></a><span className="label">kqarlos</span>
                    </div>

                </div>

                <div className="row my-1 text-white text-center footerText">
                    <div className="col-12 ">
                        Bay Area, CA
                    </div>
                </div>

                <hr className="py-0 my-0" />

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center pb-2 footerText text-white">© 2022 Copyright: Carlos T.</div>

            </div>

        </footer>
    )
}

export default Footer;