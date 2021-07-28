import React from 'react';
import './style.css';

function ProjectCard(props) {

    return (

        <a className="card pCard" href="#project" onClick={() => props.handleClick(props.name)}>
            <img className="card-img-top" src={props.imgLink} alt={props.imgAlt} />
            <section className="btn projectBtn text-white">
                <header className="projectH1">{props.title}</header>
                <p className="card-text contentText">{props.description}</p>
            </section>
        </a>
    )
}

export default ProjectCard;