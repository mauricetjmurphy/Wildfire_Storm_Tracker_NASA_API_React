import React from "react";
import EventInfo from "./EventInfo";

import "../styles/styles.css";

const EventsBar = ({ eventInfo }) => {
    return (
        <div className="events-bar">
            {eventInfo && <EventInfo eventInfo={eventInfo} />}
        </div>
    );
};

export default EventsBar;
