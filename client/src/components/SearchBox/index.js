import React from "react";

function Search() {
    return (
        <div className="row">
            <div className="container">
                <h1>Book Search</h1>
                <form>
                    <div className="form-group">
                        <label for="searchBarInput">Book</label>
                        <input className="form-control" placeholder="Harry Potter" id="searchBarInput"></input>
                    </div>    
                    <button type="submit" className="btn btn-dark">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;