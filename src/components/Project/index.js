import React from 'react';
import './style.css';
import { useStoreContext } from "../utils/GlobalState";
import { SET_PROJECT } from '../utils/actions';

function Project() {

    const [state, dispatch] = useStoreContext();


    return (


        <div id="project" data-project="{{project}}" style="display:{{projectDisplay}};">

            {/* <!-- start grid --> */}

            <div class="container p-4 bg-white border content" id="contactContent">

                {/* <!-- first row / title --> */}
                <div class="row mb-3">
                    <div class="col-12">
                        <p class="font-weight-bold text-info border-bottom pb-3 headingText">{{ name }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 h4 mb-2">Description</div>
                    <div class="col-12">{{ description }}</div>
                </div>
                <div class="row">
                    <div class="col-12 h4 my-2">Built with</div>

                    <div class="col-12">
                        <div class="row mb-2">
                            <div class="col-12">
                                <ul class="list-group list-group-horizontal-lg justify-content-md-center">
                                    {{ #each stack }}
                                    <li class="list-group-item">{{ this}}</li>
                                    {{/ each}}

                                </ul>
                            </div>
                        </div>

                        <hr class="mx-4">

                            <div class="row">


                                <div class="col-md-4">
                                    <div class="list-group" id="list-tab" role="tablist">

                                        {{ #each stack2 }}

                                        {{ #is @index 0}}
                                        <a class="list-group-item list-group-item-action active" id={{ this}} data-toggle="list"
                                            href="#list-{{this}}" role="tab" aria-controls="{{this}}">{{ this}}</a>
                                        {{/ is}}


                                        {{ #isnt @index 0}}
                                        <a class="list-group-item list-group-item-action" id={{ this}} data-toggle="list"
                                            href="#list-{{this}}" role="tab" aria-controls="{{this}}">{{ this}}</a>
                                        {{/ isnt}}

                                        {{/ each}}

                                    </div>
                                </div>


                                <div class="col-md-8">
                                    <div class="tab-content" id="nav-tabContent">

                                        {{ #each stack2 }}

                                        {{ #is @index 0}}
                                        <img class="tab-pane fade show active codeSnippet" id="list-{{this}}" role="tabpanel"
                                            aria-labelledby={{ this}} src="{{../snippetLink}}{{this}}.jpg" alt="Code Snippet">
                                            {{/ is}}

                                            {{ #isnt @index 0}}
                                            <img class=" tab-pane fade codeSnippet" id="list-{{this}}" role="tabpanel" aria-labelledby={{ this}}
                                                src="{{../snippetLink}}{{this}}.jpg" alt="Code Snippet">
                                                {{/ isnt}}

                                                {{/ each}}

                        </div>
                    </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 h4 my-2">Links</div>
                                <a class="col-12 link" style="text-decoration: none;" href={{ repo }} target="_blank"><i
                                    class="fab fa-github-alt"></i> {{ repo }}</a>
                                <a class="col-12 link" style="text-decoration: none;" href={{ deployed }} target="_blank"><i
                                    class="far fa-play-circle"></i> {{ deployed }}</a>

                            </div>
                            <div class="row">
                                <img class="col-12 mt-3 py-1" src={{ src }} alt="Project Gif">
        </div>

                                {/* <!-- end content --> */}

                            </div>

                            {/* <!-- end grid --> */}

</div>

                        )

}

                        export default Project;