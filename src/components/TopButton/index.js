import React, { useEffect } from 'react';
import './style.css';

function TopButton() {

    function handleScroll() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 1300) {
            document.getElementById("topBtn").style.display = 'block'
        } else {
            document.getElementById("topBtn").style.display = 'none'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (

        // <a href="#about" className="btn text-white bg-info font-raleway smoothLink" id="topBtn"><span id="t">Top </span><i
        //     className="fas fa-arrow-circle-up"></i></a>
        <a href="#about" className="btn text-info" id="topBtn"><i class="fa-solid fa-angles-up display-4"></i></a>
    )
}

export default TopButton;