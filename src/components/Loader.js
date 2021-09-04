import React from "react";
import spinner from "./spinner.gif";

const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const Loader = () => {
    return (
        <div style={styles}>
            <img src={spinner} alt="Loading" />
        </div>
    );
};

export default Loader;
