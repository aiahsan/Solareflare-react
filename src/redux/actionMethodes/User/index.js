import {types} from '../types'
export const saveAddress=(data)=>{
    return { type: types.SAVEADDRESS, payload: data }    
}

