//to store update state
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantListReducers";

//to hold updated states use reducers
const reducers = combineReducers({
    restListReducer:restaurantListReducer
})

const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware)) 
export default store