import React, { useEffect } from 'react';
import './style.css';
import { useStoreContext } from "../../utils/GlobalState";

function Project() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log(state)
    }, [])


    return (
        <>
            {
                state.currentProject ==! '' &&
                <div id="project" data-project={state.currentProject} style={{ display: state.projectDisplay }}>

                    {/* <!-- start grid --> */}

                    <div className="container p-4 bg-white border content" id="contactContent">

                        {/* <!-- first row / title --> */}
                        <div className="row mb-3">
                            <div className="col-12">
                                <p className="font-weight-bold text-info border-bottom pb-3 headingText">{state.currentProject.name}</p>
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
                                                        <a className="list-group-item list-group-item-action active" id={stack} data-toggle="list"
                                                            href={`#list-${stack}`} role="tab" aria-controls={stack}>{stack}</a>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <a className="list-group-item list-group-item-action" id={stack} data-toggle="list"
                                                            href={`#list-${stack}`} role="tab" aria-controls={stack}>{stack}</a>
                                                    )
                                                }
                                            })}

                                        </div>
                                    </div>


                                    <div className="col-md-8">
                                        <div className="tab-content" id="nav-tabContent">

                                            {state.currentProject.stack2.map((stack, i) => {
                                                if (i === 0) {
                                                    return (
                                                        <img className="tab-pane fade show active codeSnippet" id={`#list-${stack}`} role="tabpanel"
                                                            aria-labelledby={stack} src={`${state.currentProject.snippetLink}${stack}.jpg`} alt="Code Snippet" />
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <img className=" tab-pane fade codeSnippet" id={`#list-${stack}`} role="tabpanel" aria-labelledby={stack}
                                                            src={`${state.currentProject.snippetLink}${stack}.jpg`} alt="Code Snippet" />
                                                    )
                                                }

                                            })}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 h4 my-2">Links</div>
                            <a className="col-12 link" style="text-decoration: none;" href={state.currentProject.repo} target="_blank"><i
                                className="fab fa-github-alt"></i> {state.currentProject.repo}</a>
                            <a className="col-12 link" style="text-decoration: none;" href={state.currentProject.deployed} target="_blank"><i
                                className="far fa-play-circle"></i> {state.currentProject.deployed}</a>

                        </div>
                        <div className="row">
                            <img className="col-12 mt-3 py-1" src={state.currentProject.src} alt="Project Gif" />
                        </div>

                        {/* <!-- end content --> */}

                    </div>

                    {/* <!-- end grid --> */}

                </div>
            }
        </>

    )

}

export default Project;