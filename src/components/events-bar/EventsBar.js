import React from "react";
import EventInfo from "./EventInfo";

import "../../styles/styles.css";
import "./events-bar.css";

const EventsBar = ({ eventInfo }) => {
    return (
        <div className="events-bar">
            <p>Information</p>
            {eventInfo && <EventInfo eventInfo={eventInfo} />}
        </div>
    );
};

export default EventsBar;
