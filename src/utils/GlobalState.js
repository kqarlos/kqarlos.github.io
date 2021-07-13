import React, { createContext, useReducer, useContext } from "react";
import {
    SET_PROJECT
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                project: action.project,
            };
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        currentProject: '',
        projectDisplay: 'none',
        projects: {
            'artiste': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Artiste Affame",
                description: "Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",
                stack: ["React", "Node", "HTML", "CSS", "Javascript"],
                stack2: ["MongoDB", "Mongoose", "Express", "Axios", "Materialize"],
                snippetLink: "assets/images/artiste/",
                repo: "https://github.com/kqarlos/artiste-affame",
                deployed: "https://artiste-affame.herokuapp.com/",
                src: "assets/images/artiste/artiste-live.gif"
            },
            'electionYear': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Election Year",
                description: "Full-stack application that allows to create an account and search for their representatives.",
                stack: ["MySQL", "Express", "Node", "Bootstrap", "Axios", "HMTL", "CSS", "Javascript"],
                stack2: ["Sequelize", "Handlebars", "Charts"],
                snippetLink: "assets/images/election/",
                repo: "https://github.com/kqarlos/election-year",
                deployed: "https://electionyear2020.herokuapp.com/",
                src: "assets/images/election/election-year-live.gif"
            },
            'memoryGame': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Memory Game",
                description: "Choose a game theme and start playing. Only click each image once. Click twice and it's game over",
                stack: ["React", "Node", "Bootstrap", "Axios", "HTML", "CSS", "Javascript"],
                stack2: ["React-Routing", "React-State"],
                snippetLink: "assets/images/memory/",
                repo: "https://github.com/kqarlos/memory-game",
                deployed: "https://kqarlos.github.io/memory-game/",
                src: "assets/images/memory/memory-game-live.gif"
            },
            'noteTaker': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Note Taker",
                description: "Real-time note taking application. Take notes, update them, and delete them with this note-taker.",
                stack: ["Node", "Express", "Bootstrap", "HTML", "CSS"],
                stack2: ["Javascript"],
                snippetLink: "assets/images/note/",
                repo: "https://github.com/kqarlos/note-taker",
                deployed: "https://note-taker2020.herokuapp.com/",
                src: "assets/images/note/note-taker-live.gif"
            },
            'googleLibrary': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Google Library",
                description: "Search through Google Books API and keep a list of your favorite books.",
                stack: ["MongoDB", "Express", "React", "Node", "Bootstrap", "Axios", "Mongoose"],
                stack2: ["React-Reducer"],
                snippetLink: "assets/images/google/",
                repo: "https://github.com/kqarlos/google-library",
                deployed: "https://google-library-mern.herokuapp.com/",
                src: "assets/images/google/google-library-live.gif"
            },
            'passwordGenerator': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Password Generator",
                description: "Generates a random password based on user preferences and copies it to the clipboard.",
                stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
                repo: "https://github.com/kqarlos/password-generator",
                deployed: "https://kqarlos.github.io/password-generator/",
                src: "assets/images/password-generator.png"
            },
            'dayPlanner': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Day Planner",
                description: "A planner for day activities that saves information to local storage",
                stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                repo: "https://github.com/kqarlos/day-planner",
                deployed: "https://kqarlos.github.io/day-planner/",
                src: "assets/images/day-planner.png"
            },
            'weatherDashboard': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Weather Dashboard",
                description: "Displays current weather and forecast for a searched city.",
                stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                repo: "https://github.com/kqarlos/weather-dashboard",
                deployed: "https://kqarlos.github.io/weather-dashboard/",
                src: "assets/images/weather-live.gif"
            },
            'dinnerParty': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Dinner Party",
                description: "Application that recommends a dish and a cocktail based on a protein choice",
                stack: ["HTML", "CSS", "Javascript", "Materialize", "Bootstrap"],
                repo: "https://github.com/kqarlos/dinner-party",
                deployed: "https://kqarlos.github.io/dinner-party/",
                src: "assets/images/dinner-party-live.gif"
            },
            'shoppingBuddy': {
                projectDisplay: 'block',
                project: req.params.project,
                name: "Shopping Buddy",
                description: "Manage your shopping list on the go",
                stack: ["HTML", "CSS", "Javascript", "Express", "Node", "Handlebars", "MySQL"],
                repo: "https://github.com/kqarlos/shopping-buddy",
                deployed: "https://shopping-buddy2020.herokuapp.com/",
                src: "assets/images//shopping/shopping-buddy.gif"
            },
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
