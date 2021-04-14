import {instance} from './api'

export const authAPI = {
    login(authorizationData: AuthorizationDataType) {
        return instance.post(`login/`, authorizationData)
            .then(res => res.data.data)
    }
}

type AuthorizationDataType = {
    username: string | null,
    password: string | null
}