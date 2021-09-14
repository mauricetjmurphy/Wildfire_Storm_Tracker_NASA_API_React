import React from "react";
import EventsBar from "../events-bar/EventsBar";
import LeafletMap from "./LeafletMap";

import { MapContainer } from "react-leaflet";

function MapInfoConatiner({ eventData }) {
    return (
        <div className="map-container">
            <LeafletMap eventData={eventData} />
            <EventsBar />
        </div>
    );
}

export default MapInfoConatiner;
