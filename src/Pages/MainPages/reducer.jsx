import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
    app: {
        providers: [],
        price_range:{},
        search: ""
    },
    
};

export const testReducer = (state, action) => {
    switch(action.type) {
        case 'test_update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};