import {types} from '../actionMethodes/types';


export const address = (state =null, action) => {
    
    if (action.type === types.SAVEADDRESS) {
        return action.payload
    }
    if( action.type==="LOGOUT")
    {
        return null;
    }
    return state
    }
