import { IUserState,IUserActuion,userActionTypes } from "../../types/userTypes"


const iniialState:IUserState = {
    users:[],
    loading:false,
    error: null
}

export const userReducer = (state = iniialState,action:IUserActuion):IUserState => {
    switch(action.type){
        
       
          

        default:
            return state
    }
}