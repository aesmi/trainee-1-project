import WeatherPopupBox from "./WeatherPopupBox";
import SearchBox from "./SearchBox";


const IndexPage = ({ data, location, setLocation, handleLocation, searchLocation, handleSubmit, setInput }) => {
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
            <SearchBox handleSubmit={handleSubmit} setInput={setInput} />
        </>
    )
}
export default IndexPage