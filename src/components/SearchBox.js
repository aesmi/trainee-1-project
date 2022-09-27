import Logo from "../assets/duckduckgo.png";

const SearchBox = ({ handleSubmit, setInput, typeAnimation }) => {
    return (
        <>
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
                        placeholder={typeAnimation ? "" : "Let me do it for you :)"}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        disabled={typeAnimation ? true : false}
                        style={{
                            caretColor: typeAnimation ? 'transparent' : '#BBB'
                        }}
                    />
                    {typeAnimation}
                    {/* search form clear button needs to remove the input field  */}
                    {/* Typing any input can reveal a search icon which the user can click instead of having to press enter */}
                    <input id="search-form-clear" type="button" value="X" />
                </form>
            </div>
        </>
    );
}
export default SearchBox