import {BaseThunkType, InferActionsTypes} from './redux-store'
import {authAPI} from "../api/auth-api";

const initialState = {
    isAuth: false,
    avatar: "",
    email: "",
    firstName: "",
    lastName: "",
    errorMessage: null as string | null
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/auth/SET-USER-DATA":
            return {
                ...state,
                ...action.values,
            }
        case "ButInProject/auth/SET-ERROR-MESSAGE":
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: (isAuth: boolean, avatar: string, email: string, firstName: string, lastName: string) => ({
        type: "ButInProject/auth/SET-USER-DATA",
        values: {isAuth, avatar, email, firstName, lastName}
    } as const),
    setErrorMessage: (errorMessage: string) => ({
        type: "ButInProject/auth/SET-ERROR-MESSAGE",
        errorMessage
    } as const),
}

export const login = (username: string | null, password: string | null): ThunkType =>
    async (dispatch) => {
        const authorizationData = {username, password}
        await authAPI.login(authorizationData)
            .then(res => {
                localStorage.setItem('token', res.token.access)
                dispatch(authActions.setAuthUserData(true, res.user.avatar, res.user.email, res.user.firstName, res.user.lastName))
            })
            .catch(e => {
                dispatch(authActions.setErrorMessage("Не правильный логин или пароль"))
            })
    }

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionsType>
