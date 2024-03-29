import React, { createContext, useReducer, useContext } from "react";
import {
    SET_PROJECT
} from "./actions";
import {
    GIFS, ARTISTESNIPPETS,
    ELECTIONSNIPPETS, MEMORYSNIPPETS, NOTESNIPPETS, GOOGLESNIPPETS
} from './images';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_PROJECT:
            console.log("Global state set project", action.project)
            console.log("Setting current project to ", state.projects[action.project])
            return {
                ...state,
                currentProject: state.projects[action.project],
            };
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        currentProject: {
            projectDisplay: 'block',
            project: 'artiste',
            name: "Artiste Affame",
            description: "Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",
            stack: ["React", "Node", "HTML", "CSS", "Javascript"],
            stack2: ["MongoDB", "Mongoose", "Express", "Axios", "Materialize"],
            stack2Snippets: [ARTISTESNIPPETS.ARTISTEMONGODB, ARTISTESNIPPETS.ARTISTEMONGOOSE,
            ARTISTESNIPPETS.ARTISTEEXPRESS, ARTISTESNIPPETS.ARTISTEAXIOS, ARTISTESNIPPETS.ARTISTEMATERIALIZE],
            repo: "https://github.com/kqarlos/artiste-affame",
            deployed: "https://artiste-affame.herokuapp.com/",
            src: GIFS.ARTISTEGIF
        },
        projects: {
            'artiste': {
                projectDisplay: 'block',
                project: 'artiste',
                name: "Artiste Affame",
                description: "Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",
                stack: ["React", "Node", "HTML", "CSS", "Javascript"],
                stack2: ["MongoDB", "Mongoose", "Express", "Axios", "Materialize"],
                stack2Snippets: [ARTISTESNIPPETS.ARTISTEMONGODB, ARTISTESNIPPETS.ARTISTEMONGOOSE,
                ARTISTESNIPPETS.ARTISTEEXPRESS, ARTISTESNIPPETS.ARTISTEAXIOS, ARTISTESNIPPETS.ARTISTEMATERIALIZE],
                repo: "https://github.com/kqarlos/artiste-affame",
                deployed: "https://artiste-affame.herokuapp.com/",
                src: GIFS.ARTISTEGIF
            },
            'electionYear': {
                projectDisplay: 'block',
                project: 'electionYear',
                name: "Election Year",
                description: "Full-stack application that allows to create an account and search for their representatives.",
                stack: ["MySQL", "Express", "Node", "Bootstrap", "Axios", "HMTL", "CSS", "Javascript"],
                stack2: ["Sequelize", "Handlebars", "Charts"],
                stack2Snippets: [ELECTIONSNIPPETS.ELECTIONSEQUELIZE, ELECTIONSNIPPETS.ELECTIONHANDLEBARS, ELECTIONSNIPPETS.ELECTIONCHARTS],
                repo: "https://github.com/kqarlos/election-year",
                deployed: "https://electionyear2020.herokuapp.com/",
                src: GIFS.ELECTIONGIF
            },
            'memoryGame': {
                projectDisplay: 'block',
                project: 'memoryGame',
                name: "Memory Game",
                description: "Choose a game theme and start playing. Only click each image once. Click twice and it's game over",
                stack: ["React", "Node", "Bootstrap", "Axios", "HTML", "CSS", "Javascript"],
                stack2: ["React-Routing", "React-State"],
                stack2Snippets: [MEMORYSNIPPETS.MEMORYRR, MEMORYSNIPPETS.MEMORYRS],
                repo: "https://github.com/kqarlos/memory-game",
                deployed: "https://kqarlos.github.io/memory-game/",
                src: GIFS.MEMORYGIF
            },
            'noteTaker': {
                projectDisplay: 'block',
                project: 'noteTaker',
                name: "Note Taker",
                description: "Real-time note taking application. Take notes, update them, and delete them with this note-taker.",
                stack: ["Node", "Express", "Bootstrap", "HTML", "CSS"],
                stack2: ["Javascript"],
                stack2Snippets: [NOTESNIPPETS.NOTEJS],
                repo: "https://github.com/kqarlos/note-taker",
                deployed: "https://note-taker2020.herokuapp.com/",
                src: GIFS.NOTEGIF
            },
            'googleLibrary': {
                projectDisplay: 'block',
                project: 'googleLibrary',
                name: "Google Library",
                description: "Search through Google Books API and keep a list of your favorite books.",
                stack: ["MongoDB", "Express", "React", "Node", "Bootstrap", "Axios", "Mongoose"],
                stack2: ["React-Reducer"],
                stack2Snippets: [GOOGLESNIPPETS.GOOGLERR],
                repo: "https://github.com/kqarlos/google-library",
                deployed: "https://google-library-mern.herokuapp.com/",
                src: GIFS.GOOGLEGIF
            },
            'passwordGenerator': {
                projectDisplay: 'block',
                project: 'passwordGenerator',
                name: "Password Generator",
                description: "Generates a random password based on user preferences and copies it to the clipboard.",
                stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
                stack2: [],
                repo: "https://github.com/kqarlos/password-generator",
                deployed: "https://kqarlos.github.io/password-generator/",
                src: GIFS.PASSWORDGIF
            },
            'dayPlanner': {
                projectDisplay: 'block',
                project: 'dayPlanner',
                name: "Day Planner",
                description: "A planner for day activities that saves information to local storage",
                stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                stack2: [],
                repo: "https://github.com/kqarlos/day-planner",
                deployed: "https://kqarlos.github.io/day-planner/",
                src: GIFS.DAYPLANNERGIF
            },
            'weatherDashboard': {
                projectDisplay: 'block',
                project: 'weatherDashboard',
                name: "Weather Dashboard",
                description: "Displays current weather and forecast for a searched city.",
                stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                stack2: [],
                repo: "https://github.com/kqarlos/weather-dashboard",
                deployed: "https://kqarlos.github.io/weather-dashboard/",
                src: GIFS.WEATHERGIF
            },
            'dinnerParty': {
                projectDisplay: 'block',
                project: 'dinnerParty',
                name: "Dinner Party",
                description: "Application that recommends a dish and a cocktail based on a protein choice",
                stack: ["HTML", "CSS", "Javascript", "Materialize", "Bootstrap"],
                stack2: [],
                repo: "https://github.com/kqarlos/dinner-party",
                deployed: "https://kqarlos.github.io/dinner-party/",
                src: GIFS.DINNERGIF
            },
            'shoppingBuddy': {
                projectDisplay: 'block',
                project: 'shoppingBuddy',
                name: "Shopping Buddy",
                description: "Manage your shopping list on the go",
                stack: ["HTML", "CSS", "Javascript", "Express", "Node", "Handlebars", "MySQL"],
                stack2: [],
                repo: "https://github.com/kqarlos/shopping-buddy",
                deployed: "https://shopping-buddy2020.herokuapp.com/",
                src: GIFS.SHOPPINGGIF
            },
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
