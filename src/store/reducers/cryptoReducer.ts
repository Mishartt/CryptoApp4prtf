import { cryptoActionTypes, ICryptioAction, ICryptoState } from "../../types/cryptoTypes";




const initialState:ICryptoState = {
    crypto:[],
    sort:null,
    isLoading:true,
}


export const cryptoReducer = (state:ICryptoState = initialState,action:ICryptioAction):ICryptoState => {
    switch(action.type){
    case cryptoActionTypes.FETCH_CRYPTO:
        return {...state ,crypto:action.payload}
        
    case cryptoActionTypes.SORT_BY_PRICE:
        return {...state,crypto:state.crypto.sort((a,b) => b.market_data.price_usd - a.market_data.price_usd ),sort:'plus'}

    case cryptoActionTypes.SORT_BY_24H:
         return {...state,crypto:state.crypto.sort((a,b) => b.market_data.percent_change_usd_last_24_hours - a.market_data.percent_change_usd_last_24_hours),sort:'plus'}

    case cryptoActionTypes.SORT_BY_7D:
        return {...state,crypto:state.crypto.sort((a,b) => b.roi_data.percent_change_last_1_week - a.roi_data.percent_change_last_1_week),sort:'plus'}



        case cryptoActionTypes.SORT_BY_PRICE_:
            return {...state,crypto:state.crypto.sort((a,b) => a.market_data.price_usd - b.market_data.price_usd),sort:null}
    
        case cryptoActionTypes.SORT_BY_24H_:
            return {...state,crypto:state.crypto.sort((a,b) => a.market_data.percent_change_usd_last_24_hours - b.market_data.percent_change_usd_last_24_hours),sort:null}

        case cryptoActionTypes.SORT_BY_7D_:
            return {...state,crypto:state.crypto.sort((a,b) => a.roi_data.percent_change_last_1_week - b.roi_data.percent_change_last_1_week),sort:null}

        case cryptoActionTypes.isLoading:
            return{...state,isLoading:false}
        
        default:
            return state
    }
}   






//////Add find crypto , favorite crypto , loadingStatus, more info after click, vinesti standartniy pak crtipti v state , day/night mode , --7d-- /////