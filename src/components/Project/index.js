import React, { useEffect, useState } from 'react';
import './style.css';
import { useStoreContext } from "../../utils/GlobalState";

function Project() {

    const [state, dispatch] = useStoreContext();

    const [projectState, setProjectState] = useState({
        stack2Snippets: state.currentProject.stack2Snippets || [],
        currentIndex: 0
    });

    function handleClick(e) {
        console.log("project state", projectState.stack2Snippets)
        console.log("state snippets", state.currentProject.stack2Snippets)
        console.log("clicked snippet", e.target.attributes['index'].value)
        let index = e.target.attributes['index'].value;
        setProjectState({
            ...state,
            stack2Snippets: state.currentProject.stack2Snippets || [],
            currentIndex: index
        })
    }


    return (
        <>

            <div id="project" data-project={state.currentProject.project}>

                <main className="container p-4 bg-white border font-raleway">

                    {/* <!-- first row / title --> */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <p className="font-weight-bold text-info border-bottom headingText">{state.currentProject.name}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 h4 mb-2">Description</div>
                        <div className="col-12">{state.currentProject.description}</div>
                    </div>
                    <div className="row">
                        <div className="col-12 h4 my-2">Built with</div>

                        <div className="col-12">
                            <div className="row mb-2">
                                <div className="col-12">
                                    <ul className="list-group list-group-horizontal-lg justify-content-md-center">
                                        {state.currentProject.stack.map((stack, i) => {
                                            return (
                                                <li key={i} className="list-group-item">{stack}</li>
                                            )

                                        })}

                                    </ul>
                                </div>
                            </div>

                            <hr className="mx-4" />

                            <div className="row">

                                <div className="col-md-4">
                                    <div className="list-group" id="list-tab" role="tablist">

                                        {state.currentProject.stack2.map((stack, i) => {
                                            if (i === 0) {
                                                return (
                                                    <a className="list-group-item list-group-item-action active" onClick={handleClick} id={stack} data-toggle="list"
                                                        href={`#list-${stack}`} key={i} index={i} role="tab" aria-controls={stack}>{stack}</a>
                                                )
                                            }
                                            else {
                                                return (
                                                    <a className="list-group-item list-group-item-action" onClick={handleClick} id={stack} data-toggle="list"
                                                        href={`#list-${stack}`} key={i} index={i} role="tab" aria-controls={stack}>{stack}</a>
                                                )
                                            }
                                        })}

                                    </div>
                                </div>


                                <div className="col-md-8">
                                    <div className="tab-content" id="nav-tabContent">

                                        {state.currentProject.stack2Snippets && <img className="codeSnippet" id={`#list-${projectState.currentIndex}`} role="tabpanel" aria-labelledby={projectState.currentIndex}
                                            src={state.currentProject.stack2Snippets[projectState.currentIndex]} alt="Code Snippet" />}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 h4 my-2">Links</div>
                        <a className="col-12 link" style={{ textDecoration: 'none' }} href={state.currentProject.repo} target="_blank"><i
                            className="fab fa-github-alt"></i> {state.currentProject.repo}</a>
                        <a className="col-12 link" style={{ textDecoration: 'none' }} href={state.currentProject.deployed} target="_blank"><i
                            className="far fa-play-circle"></i> {state.currentProject.deployed}</a>

                    </div>
                    <div className="row">
                        <img className="col-12 mt-3 py-1" src={state.currentProject.src} alt="Project Gif" />
                    </div>

                </main>

            </div>

        </>

    )

}

export default Project;