import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoActionTypes, ICoin, ICryptoState } from "../types/cryptoTypes";
import { SwitchFn } from "./Switch";


const CryptoItem:FC<any> = ({coin}:ICoin) => {
  
    const dispatch = useDispatch()
    var rounded = function(number:any){
        return +number.toFixed(2);
    }
    
    const coinImg = SwitchFn(coin.symbol)
    
    let colorr = coin.market_data.percent_change_usd_last_24_hours > 0 ? 'limegreen' : 'red'
    let colorrr = coin.roi_data.percent_change_last_1_week > 0 ? 'limegreen' : 'red'

    const state = useSelector((state:any) => state)
    const h24 = () => {
        
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_24H_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_24H})
        }
       
    }
    const d7 = () => {
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_7D_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_7D})
        }
    }

    const price = () => {
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_PRICE_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_PRICE})
        }
    }
    
    return(
        <div className="cryptoItem">
            <div style={{display:'flex',alignItems:'center',height:'90%',justifyContent:'space-between'}}>
                <div style={{width:'14%',backgroundColor:'transparent',display:'flex',alignItems:'center',justifyContent:'start'}}>
                <img src={coinImg} style={{height:'40px',marginRight:'7%',backgroundColor:'transparent'}} alt="" /> 
                <p style={{backgroundColor:'transparent'}}> <strong style={{backgroundColor:'transparent'}}>{coin.symbol}</strong> | {coin.name}</p>
                </div>
                <p onClick={h24} style={{backgroundColor:'transparent'}}>24h: <strong style={{color:colorr,backgroundColor:'transparent'}}>{rounded(coin.market_data.percent_change_usd_last_24_hours)} %</strong></p>
                <p onClick={d7} style={{backgroundColor:'transparent'}}>7d: <strong style={{color:colorrr,backgroundColor:'transparent'}}>{rounded(coin.roi_data.percent_change_last_1_week)} %</strong></p>
                <div style={{width:'15%',backgroundColor:'transparent'}} ><p style={{backgroundColor:'transparent'}}>max: {rounded(coin.all_time_high.price)}$</p></div>  
                <div onClick={price} style={{width:'15%',backgroundColor:'transparent',display:'flex',justifyContent:'flex-end'}} ><h3 style={{backgroundColor:'transparent'}}> {rounded(coin.market_data.price_usd)}$</h3></div>  
            </div>
        </div>
    )
}


export default CryptoItem



