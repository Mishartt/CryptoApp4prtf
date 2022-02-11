import { userActionTypes } from "../../types/userTypes";



export const fetchUsers = () =>{

    return async (dispatch) => {
        try{
            dispatch({type:userActionTypes.FETCH_USERS})
        }catch(e){
            dispatch({type:userActionTypes.FETCH_USERS_ERROR,paload:'ERROR'})
            
        }
    }
}