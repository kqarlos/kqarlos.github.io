import React from 'react';
import './style.css'

function Footer() {

    return (

        // <!-- Footer -->
        <footer class="page-footer font-small stylish-color-dark pt-3">

            {/* <!-- Footer Links --> */}
            <div class="container text-center">

                {/* <!-- Grid row --> */}


                <div class="row justify-content-md-center contentText text-white">
                    <div class="col col-lg-2">
                        <a class="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(25, 25, 139)'}} target="_blank"
                            href="https://www.linkedin.com/in/carlos-toledo415/">
                            <i class="fab fa-linkedin-in"></i></a>carlos-toledo415
                    </div>

                    <div class="col-md-auto">
                        <a href="mailto:kqarlos415@gmail.com" class="btn headingText footerLink mx-2"
                            style="background-color:#4aaaa5;" style={{textDecoration: 'none'}}><i
                                class="far fa-paper-plane"></i></a>kqarlos415@gmail.com
                    </div>

                    <div class="col col-lg-2">
                        <a class="btn headingText footerLink mx-2" style={{backgroundColor: 'rgb(17, 17, 17)'}} target="_blank"
                            href="https://github.com/kqarlos">
                            <i class="fab fa-github-alt"></i></a>kqarlos
                    </div>




                </div>

                <div class="row my-1 text-white contentText">
                    <div class="col-12 ">
                        Bay Area, CA
                    </div>
                </div>


                <hr class="py-0 my-0" />

                {/* <!-- Copyright --> */}
                <div class="footer-copyright text-center pb-2 contentText text-white">© 2021 Copyright: Carlos T.</div>
                {/* <!-- Copyright --> */}


            </div>
            {/* <!-- Footer Links --> */}

        </footer>
        // {/* <!-- Footer --> */}
    )
}

export default Footer;