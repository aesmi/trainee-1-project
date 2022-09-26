import { useSearchParams } from 'react-router-dom';
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    /*
        Need to detect the ?q= then at least 1 character after equals that is not whitespace
        Need to account for what happens if params provided is only whitespace or 
        If no params are provided at all e.g. localhost:3000/search
        --> Redirect to main page?

        Else if params are provided that is not whitespace --> Play animation
    */

    console.log(Object.fromEntries([...searchParams]));
    let paramObj = Object.fromEntries([...searchParams]);

    return (
        <>
            {/* {console.log(encodeURIComponent("?q="))} */}
            <div>
                <p>{`My new page with url params: ${searchParams}`}</p>
            </div>
        </>
    )
}
export default SearchPage