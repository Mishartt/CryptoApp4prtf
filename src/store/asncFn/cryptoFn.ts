import axios from "axios"
import { Dispatch } from "react"
import { cryptoActionTypes } from "../../types/cryptoTypes"
import { fetchCryptoAction } from "../actionCreators/cryptoActions"



export const fetchCrypto = () => {
    const currency = ['btc','eth','ltc','doge','ada','avax','sol','mana','THETA','cro','near','uni','trx']
    return async (dispatch:Dispatch<any>) => {
        try{
            
            var resp:any[] = []
            for(let i = 0;i<currency.length;i++){
               
                 resp = [...resp,await axios.get(`https://data.messari.io/api/v1/assets/${currency[i]}/metrics`).then(rs => rs.data.data)] 
                 resp[i].open = '10vh'
                 resp[i].visible = 'none'
               
            }
            
            dispatch(fetchCryptoAction(resp))
            dispatch({type:cryptoActionTypes.load,payload:resp})
            dispatch({type:cryptoActionTypes.isLoading})
            
            
        }catch(e){
            console.log(e);
            alert(e)
        }
    }

}