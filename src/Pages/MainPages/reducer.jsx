import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
    app: {
        test: 'test_context',
        providers: [],
        price_range: {max:0,min:900000}
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