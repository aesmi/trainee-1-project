import InputField from './components/InputField';
import "./css/mainPage.css";
import { useState } from 'react';
import Logo from "./assets/duckduckgo-logo.png"

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }


  return (
    <div className="App">
      <div className="this-is-everything">
        <img className="logo" src={Logo}/>
        <p>(totally original idea)</p>
        <h1>?!?</h1>
        <h2>Let Me <span style={{textDecoration: "line-through"}}>Google</span> DuckDuckGo That For You...</h2>
        <form className="search-bar">
          <input id="search-input" type="text" autocomplete="off" autocapitalize="off" placeholder="Let me do it for you :)"/>
          {/* search form clear button needs to remove the input field */}
          <input id="search-form-clear" type="button" value="X"/>
        </form>
        {/* <InputField onInput={handleChange} /> */}
      </div>
    </div>
  );
}

export default App;
