import axios from "axios"
import {baseUrlDb} from './config'

export const UserBaseApi = axios.create({
    baseURL: baseUrlDb
})