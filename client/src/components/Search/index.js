import React from "react";

import Title from './components/Title';
import SearchBox from './components/SearchBox';
import Results from './components/Results';

function Search() {
    return (
        <div className="row">
            <div class="container">
                <Title />
                <SearchBox />
                <Results />
            </div>
        </div>
    );
}

export default Search;