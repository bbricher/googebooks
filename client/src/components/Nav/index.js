import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Google Books
            </a>
            <ul class="navbar-nav mr-auto">
                <li className="nav-item active" >
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
            </ul>    
        </nav>
    );
}

export default Nav;