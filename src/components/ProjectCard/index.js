import React from 'react';
import './style.css';

function ProjectCard(props) {

    return (

        <div className="card text-center">
            <img className="card-img-top" src={props.imgLink} alt={props.imgAlt} />
            <div className="card-body projectCard">
                <a href="#project" onClick={() => props.handleClick(props.name)}
                    className="btn projectBtn text-white bg-info contentText w-100 rightCorners">{props.title}</a>
                <p className="card-text m-2">{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;