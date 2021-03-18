import {combineReducers} from 'redux';
import {createStore} from 'redux';
import { mainReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    reducer: mainReducer
})

export const store = createStore(rootReducer, composeWithDevTools());