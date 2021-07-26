import React, { useEffect } from 'react';
import './style.css';
import artisteImg from "../../assets/images/artiste/artiste.png";
import electionYearImg from "../../assets/images/election/election-year.png";
import googleLibraryImg from "../../assets/images/google/google-library.png";
import memoryGameImg from "../../assets/images/memory/memory-game.png";
import codeQuizImg from "../../assets/images/note/note-taker.png";
import dinnerPartyImg from "../../assets/images/dinner-party.png";
import shoppingBuddyImg from "../../assets/images/shopping/shopping-buddy.png";
import passGenImg from "../../assets/images/password-generator.png";
import dayPlannerImg from "../../assets/images/day-planner.png";
import weatherDashImg from "../../assets/images/weather-dashboard.png";
import { useStoreContext } from "../../utils/GlobalState"
import { SET_PROJECT } from '../../utils/actions';




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

            {/* <!-- start grid 2--> */}

            <div className="container p-4 bg-white border content">

                {/* <!-- first row / title --> */}
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="font-weight-bold text-info border-bottom pb-3 headingText">Portfolio</p>
                    </div>
                </div>

                {/* <!-- second row / content --> */}
                <div className="row">

                    <div className="col-12 col-xl-4 my-1">

                        <div className="card text-center">
                            <img className="card-img-top" src={artisteImg} alt="Drawing on a canvas" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('artiste')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Artiste
                                    Affame</a>
                                <p className="card-text m-2">Live the life of a starving artist in Artiste Affame!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 my-1 px-1">

                        <div className="card text-center">
                            <img className="card-img-top" src={electionYearImg} alt="Campaign contributions chart" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('electionYear')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Election
                                    Year</a>
                                <p className="card-text m-2">Political app to keep track of your federal representatives</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 my-1">

                        <div className="card  text-center">
                            <img className="card-img-top" src={googleLibraryImg} alt="Google books search result" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('googleLibrary')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Google
                                    Book
                                    Library</a>
                                <p className="card-text m-2">Search through Google Books API and keep a list of your favorite books.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- third row / content --> */}
                <div className="row">

                    <div className="col-12 col-lg-6  my-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={memoryGameImg} alt="Memory game" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('memoryGame')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Memory
                                    Game</a>
                                <p className="card-text m-2">Card matching game to test your memory skills</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6  my-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={codeQuizImg} alt="Note taker" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('noteTaker')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Note Taker</a>
                                <p className="card-text m-2">Real-time note taking application</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6  my-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={dinnerPartyImg} alt="Dinner Party" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('dinnerParty')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Dinner Party</a>
                                <p className="card-text m-2">Let our API digging recommend your next meal</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 my-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={shoppingBuddyImg} alt="Shopping Buddy" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('shoppingBuddy')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Shopping Buddy</a>
                                <p className="card-text m-2">Create a shopping list. Add and delete items from your list on the go!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- fourth row / content --> */}
                <div className="row">

                    <div className="col-12 col-lg-4 col-xl-4 my-2">
                        <div className="card text-center">
                            <img className="card-img-top" src={passGenImg} alt="Password Generator" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('passwordGenerator')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Password
                                    Generator</a>
                                <p className="card-text m-2">Generate a password according to your specifications</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xl-4 my-2 px-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={dayPlannerImg} alt="Day Planner" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('dayPlanner')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Day Planner</a>
                                <p className="card-text m-2">Plan your day in real time</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xl-4 my-2">
                        <div className="card text-center">
                            <img className="card-img-top" src={weatherDashImg} alt="Weather Dashboard" />
                            <div className="card-body projectCard">
                                <a href="#project" onClick={()=>handleClick('weatherDashboard')} className="btn projectBtn text-white bg-info contentText w-100 rightCorners">Weather
                                    Dashboard</a>
                                <p className="card-text m-2">Check your local weather and keep track of your favorite cities</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- end content --> */}

            </div>

            {/* <!-- end grid 2--> */}

        </div>
    )
}

export default Portfolio;