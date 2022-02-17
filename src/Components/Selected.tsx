import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { cryptoActionTypes } from "../types/cryptoTypes";


const Selected:FC<any> = () => {


    const dispatch = useDispatch()


    const sort = (e:any) => {
        console.log(e.target.value);
        switch(e.target.value){
            case 'byPrice':
                    dispatch({type:cryptoActionTypes.SORT_BY_PRICE})
                break;
            case '24h':
                dispatch({type:cryptoActionTypes.SORT_BY_24H})
                break;
            case '7d':
                dispatch({type:cryptoActionTypes.SORT_BY_7D})
                break;

        }
        
    }

    return(
        <select onChange={sort} name="sortBy" placeholder='sortBy' id="">
        <option disabled selected >sortBy</option>
        <option value="byPrice">price</option>
        <option value="24h">24h</option>
        <option value="7d">7d</option>
        </select>
    )
}


export default Selected