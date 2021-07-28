import React from 'react';
import './style.css';

function ProjectCard(props) {

    return (

        <a className="card pCard" href="#project" onClick={() => props.handleClick(props.name)}>
            <img className="card-img-top" src={props.imgLink} alt={props.imgAlt} />
            <section className="btn py-2 pl-1 pr-2 projectBtn text-white" id="secL">
                <header className="projectH1">{props.title}</header>
                <p className="card-text projectH2">{props.description}</p>
            </section>

            <section className="btn pl-1 projectBtn text-white" id="secSmall">
                <header className="projectH1">{props.title}<span id="secXS">: {props.description}</span></header>
            </section>
        </a>
    )
}

export default ProjectCard;