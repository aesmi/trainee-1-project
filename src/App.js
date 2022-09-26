import React, { useState } from "react";
import axios from 'axios'
import "./css/mainPage.css";
import "./css/weather.css"
import "./css/weather-search.css";
import "./css/duckduck-search.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from "./components/IndexPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [input, setInput] = useState("");
  const siteUrl = "https://duckduckgo.com/"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=483fbfa21ef33128ac6d64c113da5d67`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  ///////////////////////////////////// <-- to delete
  const [loc, setLoc] = useState({});
  /////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    let searchUrl = input.replace(/ /g, "+");
    let resUrl = siteUrl + "?q=" + searchUrl + "&va=j&t=hc&ia=web";
    let win = window.open(resUrl, "_blank");
    win.focus()
  }

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/search" element={<SearchPage />}>
            {/* Play animation searching in search bar {`/?q=${input}`*/}
          </Route>
          {/* 
          Put all content previously in main page into IndexPage component
          Might need to use Context API if we nest more components into IndexPage which require access to global state
          e.g. location and setLocation, data and setData */}
          <Route path="/" element={<IndexPage
            data={data}
            location={location}
            setLocation={setLocation}
            handleLocation={handleLocation}
            searchLocation={searchLocation}
            handleSubmit={handleSubmit}
            setInput={setInput} />}>
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
