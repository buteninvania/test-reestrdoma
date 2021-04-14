import {AppStateType} from './redux-store'

export const isAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getErrorMessage = (state: AppStateType) => {
    return state.auth.errorMessage
}