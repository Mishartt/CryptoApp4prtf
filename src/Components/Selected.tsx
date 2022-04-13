import React, { FC, useState } from "react";
import { useDispatch, useStore } from "react-redux";
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
        <div style={{display:'flex'}}>
        <select onChange={sort} name="sortBy" placeholder='sortBy' id="">
        <option disabled selected >sortBy</option>
        <option value="byPrice">price</option>
        <option value="24h">24h</option>
        <option value="7d">7d</option>
        </select>
                <input
                placeholder="Search"
                onChange={(e) => dispatch({type:cryptoActionTypes.search,payload:e.target.value.toLocaleUpperCase()})}
                style={{border:'sold 3px transparent'}} type="text" />
                <button className="calc__btn">Converter</button>
        </div>
    )
}


export default Selected