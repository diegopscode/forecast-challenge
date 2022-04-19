import { useEffect, useState } from "react"

import { getLocationFromCoorinates, getForecast } from "./Requests"

import Header from "./Components/Header"
import ForecastList from "./Components/ForecastList"
import FormSearch from "./Components/FormSearch"
import TitleLocation from "./Components/TitleLocation"
import Card from "./Components/Card"
import Warning from "./Components/Warning"

import type { Coord, Location, Period } from "./@types"

const LocationInitial = {
  timeZone: "",
  properties: {
    city: "",
    state: ""
  }
}

function App() {
  const [location, setLocation] = useState<Location>({ ...LocationInitial })
  const [forecast, setForecast] = useState<Period[]>([])
  const [coord, setCoord] = useState<Coord>({ lat: 39.7456, long: -97.0892 })
  const [isEnable, setIsEnable] = useState<Boolean>(true);

  const FetchForecast = async (coord: Coord) => {
   try {
    const resp = await getLocationFromCoorinates(coord)
    const { timeZone, relativeLocation: { properties }, forecast} = resp.data.properties;
    const respForecast = await getForecast(forecast)
    
    setForecast(respForecast.data.properties.periods)
    setIsEnable(true)
    setLocation({
      timeZone,
      properties: {
        city: properties.city,
        state: properties.state
      }
    })
   } catch {
     console.error("Maybe your coordinates are not from the US!")
     setIsEnable(false)
   }
  }

  const onSubmitToSearch = (coords: Coord) => {
    FetchForecast(coords);
  }

  const GetLocationName = () => {
    return `${location.timeZone} - ${location.properties.city}/${location.properties.state}`;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const { latitude, longitude } = position.coords;
      const coords = { lat: latitude, long: longitude }
      FetchForecast(coords);
      setCoord(coords)
    });
  }, [])

  return (
    <div className='app'>
      <Header />
      <main className="container">
        <FormSearch onSubmit={onSubmitToSearch} defaultValue={coord} />

        {!isEnable ? (
          <Warning>Maybe your coordinates are not from the US! Try again</Warning>
        ): <></>}

        {location.timeZone && (
          <TitleLocation>{GetLocationName()}</TitleLocation>
        )}

        <ForecastList>
          {forecast.map((item) => <Card data={item} key={item.number} />)}
        </ForecastList>
      </main>
    </div>
  );
}

export default App;
