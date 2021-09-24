import { Dispatch } from "redux"
import { authApi, LoginParamsType } from "../api/auth-api"


const inititialState = {
    isLoggedIn: false,
    error: '' as string | undefined
}
type LoginizetionReducerInititialStateType = typeof inititialState

type LoginizetionReducerActionType = ReturnType<typeof setLoggedAC>
    | ReturnType<typeof setErrorAC>

export const loginizationReducer = (state: LoginizetionReducerInititialStateType = inititialState, action: LoginizetionReducerActionType): LoginizetionReducerInititialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-ERROR':
            return { ...state, error: action.error }
        case 'LOGIN/SET-LOGGED':
            return { ...state, isLoggedIn: action.value }
    }
    return state;
}

//action
export const setUserDataAC = () => () 
export const setLoggedAC = (value: boolean) => ({ type: 'LOGIN/SET-LOGGED', value } as const)
export const setErrorAC = (error: string | undefined) => ({ type: 'LOGIN/SET-ERROR', error } as const)

//thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<LoginizetionReducerActionType>) => {
    authApi.login(data)
        .then((res) => {
                dispatch(setLoggedAC(true))
        })
        .catch((error) => {
            dispatch(setErrorAC(error.response.data.error))
        })

}