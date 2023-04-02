import { R_FAIL, R_SUCCESS } from "../constants/restaurantConstants";

export const restaurantListReducer=(state={restaurantList:[]},action)=>{
console.log(action.type);
    switch(action.type){
        case R_SUCCESS:
            return {restaurantList:action.payload}
        case R_FAIL:
            return {restaurantList:action.error}
        default:
            return state
    }
}