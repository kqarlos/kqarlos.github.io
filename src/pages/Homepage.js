import React, { useEffect } from 'react';
import About from '../components/About'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import TopButton from '../components/TopButton';
import Project from '../components/Project';
import { useStoreContext } from "../utils/GlobalState"

function Homepage() {


    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("state from homepage", state);
    }, [state.currentProject])

    return (
        <>
            <TopButton />
            <About />
            <NavBar />
            <Portfolio />
            {/* {state.currentProject && <Project />} */}
            <Project />
            <Footer />
        </>
    )
}

export default Homepage;