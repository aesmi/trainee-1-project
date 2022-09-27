import { useState } from "react";
import axios from "axios";
import WeatherPopupBox from "./WeatherPopupBox";
import { Container } from "./WeatherStyled";

export default function IndexPage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Sydney");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=483fbfa21ef33128ac6d64c113da5d67`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  function success(loc) {
    const crd = loc.coords;

    console.log("Raw data:", loc);

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    return loc;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function handleLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <Container>
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />

      <div className="location">
        <p>{data.name}</p>
        <WeatherPopupBox>hello</WeatherPopupBox>
        <button onClick={handleLocation}>console.logging location</button>{" "}
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="desc">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
      <div className="feels">
        {data.main ? (
          <p>feels like {data.main.feels_like.toFixed()}°C</p>
        ) : null}
      </div>
      <div className="humidity">
        {data.main ? <p>humidity {data.main.humidity}%</p> : null}
      </div>
      <div className="wind">
        {data.wind ? <p>wind {data.wind.speed.toFixed()} mph</p> : null}
      </div>
    </Container>
  );
}
