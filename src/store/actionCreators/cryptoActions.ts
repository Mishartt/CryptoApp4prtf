import { cryptoActionTypes } from "../../types/cryptoTypes"



export const fetchCryptoAction = (payload:any) => {
    return {type:cryptoActionTypes.FETCH_CRYPTO,payload}
}