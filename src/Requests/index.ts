import { API, FETCH } from "../Services/Api"

import type { Coord } from "@types"

export const getLocationFromCoorinates = ({ lat, long }: Coord) => {
  return API.get(`/points/${lat},${long}`)
}

export const getForecast = (forecast: string) => {
  return FETCH.get(forecast);
}