
export interface IUserState{
    users:any[],
    loading:boolean;
    error:string | null;
}

export interface IUserState2{
    user:IUserState
}

export interface IUserActuion{
    type:string,
    payload?:any
}

export enum userActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
