import React, { FC, SyntheticEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoActionTypes, ICoin, ICryptoState } from "../types/cryptoTypes";
import { SwitchFn } from "./Switch";


const CryptoItem:FC<any> = ({coin}:ICoin) => {

    const dispatch = useDispatch()
    
    var rounded = function(number:any){
        if(number){
            return +number.toFixed(2);
        }
        
    }
    
    const coinImg = SwitchFn(coin.symbol)
    
    let colorr = coin.market_data.percent_change_usd_last_24_hours > 0 ? 'limegreen' : 'red'
    let colorrr = coin.roi_data.percent_change_last_1_week > 0 ? 'limegreen' : 'red'
    let color1h = coin.market_data.percent_change_usd_last_1_hour > 0 ? 'limegreen' : 'red'
    let colorVl = coin.marketcap.volume_turnover_last_24_hours_percent > 0 ? 'limegreen' : 'red'


    const state = useSelector((state:any) => state)
    const h24 = (e:SyntheticEvent) => {
        e.stopPropagation()
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_24H_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_24H})
        }
       
    }
    const d7 = (e:SyntheticEvent) => {
        e.stopPropagation()
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_7D_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_7D})
        }
    }

    const price = (e:SyntheticEvent) => {
        e.stopPropagation();
        if(state.crypto.sort == 'plus'){
            dispatch({type:cryptoActionTypes.SORT_BY_PRICE_})
        }else{
            dispatch({type:cryptoActionTypes.SORT_BY_PRICE})
        }
    }
   
    // let size= coin.open == true ? '50px' : '35px'
    const more = () => {
       dispatch({type:cryptoActionTypes.open,payload:coin})
       dispatch({type:cryptoActionTypes.visible,payload:coin})
       
    }
    
    
    return(
        <div onClick={more} className="cryptoItem" style={{height:coin.open }}>
            <div className="cxx" style={{display:'flex',alignItems:'center',height:'90%',justifyContent:'space-between',backgroundColor:'transparent',maxHeight:'3vh'}}>
                <div style={{width:'14%',backgroundColor:'transparent',display:'flex',alignItems:'center',justifyContent:'start'}}>
                <img src={coinImg} style={{maxHeight:'40px',marginRight:'7%',backgroundColor:'transparent'}} alt="" /> 
                <p style={{backgroundColor:'transparent'}}> <strong style={{backgroundColor:'transparent'}}>{coin.symbol}</strong> | {coin.name}</p>
                </div>
                <p onClick={(e) => h24(e)} style={{backgroundColor:'transparent'}}>24h: <strong style={{color:colorr,backgroundColor:'transparent'}}>{rounded(coin.market_data.percent_change_usd_last_24_hours)} %</strong></p>
                <p onClick={(e) => d7(e)} style={{backgroundColor:'transparent'}}>7d: <strong style={{color:colorrr,backgroundColor:'transparent'}}>{rounded(coin.roi_data.percent_change_last_1_week)} %</strong></p>
                <div style={{width:'15%',backgroundColor:'transparent'}} ><p style={{backgroundColor:'transparent'}}>max: {rounded(coin.all_time_high.price)}$</p></div>  
                <div onClick={(e) => price(e)} style={{width:'15%',backgroundColor:'transparent',display:'flex',justifyContent:'flex-end'}} ><h3 style={{backgroundColor:'transparent'}}> {rounded(coin.market_data.price_usd)}$</h3></div>  
            </div>
            
            <div style={{display:coin.visible,height:'10vh',backgroundColor:'transparent',alignItems:'end',justifyContent:'space-around'}}>
                <p>1h: <strong style={{color:color1h}}>{rounded(coin.market_data.percent_change_usd_last_1_hour)} %</strong></p>
                <p>Market Cap :{rounded(coin.marketcap.current_marketcap_usd)}$</p>
                <p>Volume24h : <strong style={{color:colorVl}}>{rounded(coin.marketcap.volume_turnover_last_24_hours_percent)}%</strong></p>
            </div>
        </div>
    )
}


export default React.memo(CryptoItem)

