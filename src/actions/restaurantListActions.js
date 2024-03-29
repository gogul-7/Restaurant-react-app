import axios from "axios";
import { R_SUCCESS,R_FAIL } from "../constants/restaurantConstants";
// action files used to define the logic for updating the state of a particular component
export const allRestaurantList=()=> async (dispatch)=>{
    try{
        const {data}= await axios.get('/restaurants.json')
            console.log(data);
            dispatch({
                type:R_SUCCESS,
                payload:data.restaurants
            })
    }
    catch(error){
        dispatch({
            type:R_FAIL,
            error:error
        })
    }

}