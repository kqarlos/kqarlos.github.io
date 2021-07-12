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
        project: ''
    });
    return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
