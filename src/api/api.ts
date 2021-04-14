import axios from "axios";

export const instance = axios.create({
    headers:{},
    baseURL: `http://test-alpha.reestrdoma.ru/api/`
})