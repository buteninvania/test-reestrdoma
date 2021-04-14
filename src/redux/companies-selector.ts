import {AppStateType} from './redux-store'

export const getCompaniesSelector = (state: AppStateType) => {
    return state.companies.companies
}

export const getHousesSelector = (state: AppStateType) => {
    return state.companies.houses
}

export const getPaginationDataSelector = (state: AppStateType) => {
    return state.companies.paginationData
}

export const getIdCompanySelectedSelector = (state: AppStateType) => {
    return state.companies.idCompanySelected
}

