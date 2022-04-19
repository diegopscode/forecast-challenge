export type Coord = {
  lat: Number;
  long: Number;
}

export type Location = {
  timeZone: string;
  properties: {
    city: string;
    state: string;
  }
}

export type Period = {
  number: number,
  name: string,
  startTime: string,
  endTime: string,
  isDaytime: boolean,
  temperature: number,
  temperatureUnit: string,
  temperatureTrend?: any,
  windSpeed: string,
  windDirection: string,
  icon: string,
  shortForecast: string,
  detailedForecast: string
}