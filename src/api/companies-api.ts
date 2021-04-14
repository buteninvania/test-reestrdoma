import {instance} from './api'

export const companiesAPI = {
    getCompanies() {
        return instance.get(`reestrdoma/companies/`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.data.data)
    },
    getHousesList(company_id: number, page: number, perPage: number) {
        return instance.get(`reestrdoma/company/houses/${company_id}/?page=${page}&perPage=${perPage}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.data)
    }
}