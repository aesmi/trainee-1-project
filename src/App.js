import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/weather/Weather";
import SearchPage from "./components/search/SearchPage";

function App() {
  /////////////////////////////////////

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(input);
  //   let searchUrl = input.replace(/ /g, "+");
  //   let resUrl = siteUrl + "?q=" + searchUrl + "&va=j&t=hc&ia=web";
  //   let win = window.open(resUrl, "_blank");
  //   win.focus();
  // };

  ////////////////////////////////////////////////////////////

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          {/* Play animation searching in search bar {`/?q=${input}`*/}
          <Route path="/" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
