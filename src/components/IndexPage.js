import WeatherPopupBox from "./WeatherPopupBox";
import Logo from "../assets/duckduckgo.png";
import { useSearchParams } from 'react-router-dom';

const IndexPage = ({ data, location, setLocation, handleLocation, searchLocation, handleSubmit, setInput }) => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);

    return (
        <>
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
                <img className="logo" src={Logo} alt="DuckDuckGo Logo" />
                <p>(totally original idea)</p>
                <h1>?!?</h1>
                <h2>
                    Let Me <span style={{ textDecoration: "line-through" }}>Google</span>{" "}
                    DuckDuckGo That For You...
                </h2>
                <form className="search-bar" role="search" onSubmit={handleSubmit}>
                    {/* TODO: Instead of searching the result directly on duckduckgo, it should generate a URL
                    e.g. localhost:3000/search/?q=most+popular+sport which when the user types into their browser

                    Opens the SearchPage which will run an animation

                    Technically the functionality could of just been done conditionally in the IndexPage
                    but I think it's cleaner to divide into different pages + provides option to pick and choose
                    which elements I want to use/exclude from the IndexPage without added complexity of
                    conditionally rendering each component based on url parameters*/}
                    <input
                        id="search-input"
                        type="text"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder="Let me do it for you :)"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    {/* search form clear button needs to remove the input field  */}
                    {/* Typing any input can reveal a search icon which the user can click instead of having to press enter */}
                    <input id="search-form-clear" type="button" value="X" />
                </form>
            </div>

            <div className="">

            </div>
        </>
    )
}
export default IndexPage