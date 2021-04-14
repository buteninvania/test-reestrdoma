import {BaseThunkType, InferActionsTypes} from "./redux-store"
import {companiesAPI} from "../api/companies-api";
import moment from "moment";

const initialState = {
    companies: [],
    houses: [],
    paginationData: <PaginationDataType>{
        currentPage:1
    },
    idCompanySelected: 1
}

export const companiesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/companies/SET-COMPANIES":
            return {
                ...state,
                companies: action.companies
            }
        case "ButInProject/companies/SET-HOUSES":
            return {
                ...state,
                houses: action.houses
            }
        case "ButInProject/companies/SET-PAGINATION-DATA":
            return {
                ...state,
                paginationData: action.paginationData
            }
        case "ButInProject/companies/SET-ID-COMPANY-SELECTED":
            return {
                ...state,
                idCompanySelected: action.idCompanySelected
            }
        default:
            return state
    }
}

export const actionsCompanies = {
    setCompanies: (companies: any) => ({
        type: "ButInProject/companies/SET-COMPANIES",
        companies
    } as const),
    setHouses: (houses: any) => ({
        type: "ButInProject/companies/SET-HOUSES",
        houses
    } as const),
    setPaginationData: (paginationData: any) => ({
        type: "ButInProject/companies/SET-PAGINATION-DATA",
        paginationData
    } as const),
    setIdCompanySelected: (idCompanySelected: any) => ({
        type: "ButInProject/companies/SET-ID-COMPANY-SELECTED",
        idCompanySelected
    } as const),
}

export const getCompaniesThunk = (): ThunkType => async (dispatch) => {
    await companiesAPI.getCompanies()
        .then(res => {
            let companies = <any>[]
            res.forEach((item: any, index: number) => {
                let {id, name, housesCount} = item
                let newCompany = {id, name, housesCount, key: index}
                companies.push(newCompany)
            })
            dispatch(actionsCompanies.setCompanies(companies))
        })
        .catch(e => {

        })
}

export const getHousesThunk = (id_company: number, pageCount: number = 1): ThunkType => async (dispatch) => {
    await companiesAPI.getHousesList(id_company, pageCount, 10)
        .then((res) => {
            console.log(res.links)
            console.log(res.data)
            dispatch(actionsCompanies.setPaginationData(res.links))
            let houses = <any>[]
            res.data.forEach((item: any, index: number) => {
                let {id, address, createdAt, reestrFlatCount} = item
                createdAt = moment(createdAt).format('MM-DD-YYYY')
                let newHouse = {id, address, createdAt, reestrFlatCount, key: index}
                houses.push(newHouse)
            })
            dispatch(actionsCompanies.setHouses(houses))
        })
        .catch((e) => {

        })
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actionsCompanies>
type ThunkType = BaseThunkType<ActionsType>
type PaginationDataType = {
    currentPage: number
    lastPage: number
    nextPage: number
    objectsCount: number
    prevPage: number
}