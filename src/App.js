import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import "./css/mainPage.css";
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }


  return (
    <div className="App">
      <h1>insertProjectName</h1>
      <h2>Let Me Google That For You...</h2>
      <InputField onInput={handleChange} />
    </div>
  );
}

export default App;
