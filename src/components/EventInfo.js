import React from "react";

import "../styles/styles.css";

const EventInfo = ({ eventInfo }) => {
    if (eventInfo) {
        return (
            <div>
                <h1>Event Information</h1>
                <ul>
                    <li>Id: {eventInfo.id}</li>
                    <li>Title: {eventInfo.title}</li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default EventInfo;
