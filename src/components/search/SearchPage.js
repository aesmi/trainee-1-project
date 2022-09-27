import { useSearchParams } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SearchBox from "./SearchBox";
import { SearchContainer } from "./SearchStyled";
import Logo from "../../assets/duckduckgo.png";

export default function SearchPage() {
  ///////////////////////////////////////////////////////////////////////////////
  // const [searchParams] = useSearchParams();
  ///////////////////////////////////////////////////////////////////////////////

  /*
        Use react-type-animation
        Need to detect the ?q= then at least 1 character after equals that is not whitespace
       TODO: Need to account for what happens if params provided is only whitespace or 
        If no params are provided at all e.g. localhost:3000/search
        --> Redirect to main page?

        Else if params are provided that is not whitespace --> Play animation

        Message box at bottom with instructions,
        Message box says Step 1: type your search result --> fade into loading animation --> into next step
        Animation with keyboard sound effects 
    */

  ///////////////////////////////////////////////////////////////////////////////
  // console.log(Object.fromEntries([...searchParams]));
  // let paramObj = Object.fromEntries([...searchParams]);
  ///////////////////////////////////////////////////////////////////////////////

  // Create a time variable which consists of the total time to run the TypeAnimation

  // queryArr uses random delay in ms between words to simulate more human typing
  // E.g. [most, popular, sport] --> [2000, most, 1200, popular, 1500, sport]

  ///////////////////////////////////////////////////////////////////////////////
  // const queryArr = paramObj.q.split(" ");
  // console.log(`queryArr contains: ${queryArr}`);
  // console.log(`queryArr length is: ${queryArr.length}`);
  ///////////////////////////////////////////////////////////////////////////////

  // const seqArr = queryArr.map((val, idx) => {
  //     console.log(`idx is ${idx}`)
  //     queryArr.splice(idx, 0, Math.floor(Math.random() * 2000) + 1000)
  //     return
  // })

  // for (let i = 0; i < queryArr.length; i + 2) {
  //     queryArr.splice(i, 0, Math.floor(Math.random() * 2000) + 1000)
  // }
  // console.log(`queryArr contains: ${queryArr}`)

  return (
    <SearchContainer>
      <img className="logo" src={Logo} alt="DuckDuckGo Logo" />
      <p>(totally original idea)</p>
      <h1>?!?</h1>
      <h2>
        Let Me <span style={{ textDecoration: "line-through" }}>Google</span>{" "}
        DuckDuckGo That For You...
      </h2>
      <SearchBox />
    </SearchContainer>
    // <div className="search-container">
    //   {/* {console.log(encodeURIComponent("?q="))} */}
    //   <SearchBox
    //     handleSubmit={(e) => e.preventDefault()}
    //     setInput={() => {}}
    //     typeAnimation={
    //       <TypeAnimation
    //         sequence={[2000, paramObj.q]}
    //         className="type-animation"
    //         cursor={true}
    //         speed={20}
    //       />
    //     }
    //   />
    // </div>
  );
}
