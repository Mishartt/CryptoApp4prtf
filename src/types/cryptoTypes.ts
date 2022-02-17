




export interface ICryptioAction {
    type:string
    payload?:any
}

export enum cryptoActionTypes {
    FETCH_CRYPTO = 'FETCH_CRYPTO',
    SORT_BY_PRICE = 'SORT_BY_PRICE',
    SORT_BY_24H = 'SORT_BY_24H',
    SORT_BY_7D = 'SORT_BY_7D',
    SORT_BY_PRICE_ = 'SORT_BY_PRICE_',
    SORT_BY_24H_ = 'SORT_BY_24H_',
    SORT_BY_7D_ = 'SORT_BY_7D_',
    isLoading = 'isLoading',
}

interface market_data{
    price_usd:number
    percent_change_usd_last_24_hours:number
    percent_change_usd_last_1_hour:number
}

interface all_time_high{
    price:number
}

interface roi_data{
    percent_change_last_1_week:number
}

interface ICoinn{
    name:string
    symbol:string
    market_data:market_data
    all_time_high:all_time_high
    roi_data:roi_data
}

export interface ICoin{
  coin:ICoinn
}

export interface ICryptoState {
    crypto:ICoinn[]
    sort:string | null
    isLoading:boolean
}