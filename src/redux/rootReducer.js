import {combineReducers} from "redux";

import * as User from './reducer/user';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  address:User.address,
 
});

const persistConfig={
  key:'root',
  storage,
  whitelist:['address']
}

export default persistReducer(persistConfig,rootReducer )

export function* rootSaga() {

}
