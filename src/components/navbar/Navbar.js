import React from "react";

import "../../styles/styles.css";
import "./navbar.css";

const Navbar = ({ isWildfire, selectIsWildfire, selectIsStorm }) => {
    return (
        <nav className="nav">
            <div className="item-container">
                <a className="nav-brand" href="/">
                    Wildfire Tracker
                </a>
            </div>
            <div onClick={selectIsWildfire} className="item-container active">
                <p className="nav-item">Wildfires</p>
            </div>
            <div className="item-container" onClick={selectIsStorm}>
                <p className="nav-item">Storms</p>
            </div>
        </nav>
    );
};

export default Navbar;
