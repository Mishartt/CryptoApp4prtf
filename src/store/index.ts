import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { cryptoReducer } from "./reducers/cryptoReducer";




const rootReducer = combineReducers({
    crypto:cryptoReducer,
})


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))