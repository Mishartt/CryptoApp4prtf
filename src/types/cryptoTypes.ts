




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
    open = 'open',
    visible = 'visible',
    search = 'search',
    load = 'load',
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

interface marketcap{
    current_marketcap_usd: number
    volume_turnover_last_24_hours_percent:number
}

interface ICoinn{
    name:string
    symbol:string
    market_data:market_data
    all_time_high:all_time_high
    roi_data:roi_data
    marketcap:marketcap
    open?:string
    visible? :string
}

export interface ICoin{
  coin:ICoinn
}

export interface ICryptoState {
    crypto:ICoinn[]
    sortedCrypto:ICoinn[]
    sort:string | null
    isLoading:boolean
}