import React from 'react';
import About from '../components/About'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton';
import Project from '../components/Project';
import { useStoreContext } from "../utils/GlobalState"

function Homepage() {


    const [state, dispatch] = useStoreContext();


    return (
        <>
            <TopButton />
            <About />
            <NavBar />
            <Portfolio />
            {state.project = ! '' ? <Project /> : <></>}
            <Footer />
        </>
    )
}

export default Homepage;