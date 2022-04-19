import Axios from "axios"

export const API = Axios.create({
  baseURL: 'https://api.weather.gov',
  timeout: 1000
})


export const FETCH = Axios.create({ timeout: 1000 })