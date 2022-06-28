import React from 'react';
import Welcome from '../components/Welcome'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton';
import Project from '../components/Project';
import Resume from '../components/Resume';

function Homepage() {

    return (
        <>
            <TopButton />
            <Welcome />
            <NavBar />
            <About />
            <Portfolio />
            <Project />
            <Resume />
            <Footer />
        </>
    )
}

export default Homepage;