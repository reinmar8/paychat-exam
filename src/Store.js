import { createContext, useReducer } from "react";
import { data } from './data';


export const Store = createContext();

const initialState = data;

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_USER' :
            return [...state, action.payload];
        case 'DEL_USER' : {
            const newList = state.filter((item, index) =>
                index !== action.payload
            )
            return newList;
        }
        case 'EDIT_USER' : {
            state[action.payload.id].name = action.payload.value.name;
            state[action.payload.id].email = action.payload.value.email;
            state[action.payload.id].mobile = action.payload.value.mobile;
            state[action.payload.id].address = action.payload.value.address;

            return state;
        }
            
        default:
            return state;
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}