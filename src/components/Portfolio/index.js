import React, { useEffect } from 'react';
import './style.css';
import artisteImg from "../../assets/images/artiste/artiste.png";
import electionYearImg from "../../assets/images/election/election-year.png";
import googleLibraryImg from "../../assets/images/google/google-library.png";
import memoryGameImg from "../../assets/images/memory/memory-game.png";
import noteTakerImg from "../../assets/images/note/note-taker.png";
import dinnerPartyImg from "../../assets/images/dinner-party.png";
import shoppingBuddyImg from "../../assets/images/shopping/shopping-buddy.png";
import passGenImg from "../../assets/images/password-generator.png";
import dayPlannerImg from "../../assets/images/day-planner.png";
import weatherDashImg from "../../assets/images/weather-dashboard.png";
import { useStoreContext } from "../../utils/GlobalState"
import { SET_PROJECT } from '../../utils/actions';
import ProjectCard from '../ProjectCard';




function Portfolio() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("state from portfolio", state)
    }, [])

    function handleClick(p) {
        console.log("project clicked", p)
        dispatch({
            type: SET_PROJECT,
            project: p
        });
    }

    return (

        <div id="portfolio">

            <main className=" p-4 bg-white border portfolioContent font-raleway">

                {/* <!-- first row / title --> */}
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="font-weight-bold text-info border-bottom headingText">Portfolio</p>
                    </div>
                </div>

                {/* <!-- second row / content --> */}
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 my-1 px-2">
                        <ProjectCard effect="projectLtoR" imgLink={artisteImg} imgAlt="Drawing on a canvas" handleClick={handleClick}
                            name="artiste" title="Artiste Affame" description="Live the life of a starving artist in Artiste Affame!" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-1 px-2">
                        <ProjectCard effect="projectNone" imgLink={electionYearImg} imgAlt="Campaign contributions chart" handleClick={handleClick}
                            name="electionYear" title="Election Year" description="Political app to keep track of your federal representatives" />
                    </div>
                    <div className="col-12 col-lg-4 my-1 px-2">
                        <ProjectCard effect="projectRtoL" imgLink={googleLibraryImg} imgAlt="Google books search result" handleClick={handleClick}
                            name="googleLibrary" title="Google Book Library" description="Search and save books with Google Books API" />
                    </div>
                </div>

                {/* <!-- third row / content --> */}
                <div className="row">
                    <div className="col-12 col-md-6  col-lg-6 my-1 px-2">
                        <ProjectCard effect="projectLtoR" imgLink={memoryGameImg} imgAlt="Memory Game" handleClick={handleClick}
                            name="memoryGame" title="Memory Game" description="Card matching game to test your memory skills" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6  my-1 px-2">
                        <ProjectCard effect="projectRtoL" imgLink={noteTakerImg} imgAlt="Note taker" handleClick={handleClick}
                            name="noteTaker" title="Note Taker" description="Real-time note taking application" />
                    </div>
                    <div className="col-12 col-md-6  col-lg-6  my-1 px-2">
                        <ProjectCard effect="projectLtoR" imgLink={dinnerPartyImg} imgAlt="Dinner Party" handleClick={handleClick}
                            name="dinnerParty" title="Dinner Party" description="Let our API digging recommend your next meal" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-1 px-2">
                        <ProjectCard  effect="projectRtoL" imgLink={shoppingBuddyImg} imgAlt="Shopping Buddy" handleClick={handleClick}
                            name="shoppingBuddy" title="Shopping Buddy" description="Create a shopping list. Add and delete items from your list on the go!" />
                    </div>
                </div>

                {/* <!-- fourth row / content --> */}
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-2 px-2">
                        <ProjectCard  effect="projectLtoR" imgLink={passGenImg} imgAlt="Password Generator" handleClick={handleClick}
                            name="passwordGenerator" title="Password Generator" description="Generate a password according to your specifications" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-2 px-2">
                        <ProjectCard imgLink={dayPlannerImg} imgAlt="Day Planner" handleClick={handleClick}
                            name="dayPlanner" title="Day Planner" description="Plan your day in real time" />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 my-2 px-2">
                        <ProjectCard  effect="projectRtoL" imgLink={weatherDashImg} imgAlt="Weather Dashboard" handleClick={handleClick}
                            name="weatherDashboard" title="Weather Dashboard" description="Check your local weather and keep track of your favorite cities" />
                    </div>

                </div>

            </main>

        </div>
    )
}

export default Portfolio;