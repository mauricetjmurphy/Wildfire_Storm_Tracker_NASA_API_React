import React from "react";
import { Icon } from "@iconify/react";

import "../styles/styles.css";

const nav = {
    maxWidth: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
};

const buttonContainer = {
    display: "flex",
};

const Navbar = ({ isWildfire, selectIsWildfire, selectIsStorm }) => {
    return (
        <nav style={nav}>
            <div>
                <a href="/">Events</a>
            </div>
            <div style={buttonContainer}>
                <div>
                    <button
                        onClick={selectIsWildfire}
                        className={isWildfire ? "btn wildfire" : "btn"}
                    >
                        Wildfires
                    </button>
                </div>
                <div>
                    <button
                        onClick={selectIsStorm}
                        className={!isWildfire ? "btn storm" : "btn"}
                    >
                        Storms
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
