import React, { useState } from "react";
import axios from 'axios'
import InputField from "./components/InputField";
import WeatherPopupBox from "./components/WeatherPopupBox";
import "./css/mainPage.css";
import "./css/weather.css"
import "./css/weather-search.css";
import "./css/duckduck-search.css";
import Logo from "./assets/duckduckgo.png";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Sydney");

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=483fbfa21ef33128ac6d64c113da5d67`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("Sydney")
    }
  }

  const [input, setInput] = useState("");
  ///////////////////////////////////// <-- to delete
  const [loc, setLoc] = useState({});
  /////////////////////////////////////

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  ///////////////////////////////////// <-- to delete
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
  ////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <div className="weather">
        <div className="search">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
          />
        </div>
        <div className="location">
          <p>{data.name}</p>
          <WeatherPopupBox>hello</WeatherPopupBox>
          <button onClick={handleLocation}>console.logging location</button> {/*this will be removed soon*/}
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className="feels">
          {data.main ? <p>feels like {data.main.feels_like.toFixed()}°C</p> : null}
        </div>
        <div className="humidity">
          {data.main ? <p>humidity {data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
          {data.wind ? <p>wind {data.wind.speed.toFixed()} mph</p> : null}        
        </div>
      </div>

      <div className="duckduck">
        <img className="logo" src={Logo} />
        <p>(totally original idea)</p>
        <h1>?!?</h1>
        <h2>
          Let Me <span style={{ textDecoration: "line-through" }}>Google</span>{" "}
          DuckDuckGo That For You...
        </h2>
        <form className="search-bar">
          <input
            id="search-input"
            type="text"
            autocomplete="off"
            autocapitalize="off"
            placeholder="Let me do it for you :)"
          />
          {/* search form clear button needs to remove the input field */}
          <input id="search-form-clear" type="button" value="X" />
        </form>
        {/* <InputField onInput={handleChange} /> */}
      </div>

      <div className="">

      </div>
    </div>
  );
}

export default App;
