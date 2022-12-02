import React, {useState} from "react";
import JoblyApi from './api';

function SearchForm({updateCompanies}) {
    const INITIAL_STATE = '';
    const [search, setSearch] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const {value} = e.target;
        setSearch(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = await JoblyApi.getSearchedCompanies(search);
        updateCompanies(req);
        setSearch(INITIAL_STATE);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="search-input" onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SearchForm;