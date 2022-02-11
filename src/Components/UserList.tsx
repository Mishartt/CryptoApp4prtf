import React from "react";
import { useSelector } from "react-redux";
import { IUserState2 } from "../types/userTypes";

const UserList = () => {

    const state = useSelector((state:IUserState2)=> state.user)
    console.log(state.users);
    

    return(
        <div>
                
        </div>
    )
}

export default UserList