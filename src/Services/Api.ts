import Axios from "axios"

export const API = Axios.create({
  baseURL: 'https://api.weather.gov'
})


export const FETCH = Axios.create()