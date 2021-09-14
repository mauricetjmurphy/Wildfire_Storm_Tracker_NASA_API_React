import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import L from "leaflet";

function LeafletMap({ eventData }) {
    return (
        <MapContainer
            className="map"
            center={[51.505, -0.09]}
            zoom={3}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            />

            {eventData.map((ev, i) =>
                ev.categories[0].id === 8 ? (
                    <Marker
                        key={i}
                        position={[
                            ev.geometries[0].coordinates[1],
                            ev.geometries[0].coordinates[0],
                        ]}
                    >
                        <Popup>
                            <p>{ev.title}</p>
                        </Popup>
                    </Marker>
                ) : null
            )}
        </MapContainer>
    );
}

export default LeafletMap;
