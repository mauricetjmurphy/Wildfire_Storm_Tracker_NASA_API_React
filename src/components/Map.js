import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import StormMarker from "./StormMarker";
import StormPathMarker from "./StormPathMarker";

import "../styles/styles.css";

export default function Map({
    isWildfire,
    eventData,
    setEventInfo,
    currentPosition,
}) {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 6,
    };

    const stormMarkers = eventData.map((ev, i) => {
        if (ev.categories[0].id === 10) {
            console.log(ev.geometries.length - 1);
            return ev.geometries.map((el, i) => {
                if (i < ev.geometries.length - 1) {
                    return (
                        <StormPathMarker
                            onClick={() =>
                                setEventInfo({ id: ev.id, title: ev.title })
                            }
                            lat={ev.geometries[i].coordinates[1]}
                            lng={ev.geometries[i].coordinates[0]}
                        />
                    );
                }

                if (i == ev.geometries.length - 1) {
                    return (
                        <StormMarker
                            onClick={() =>
                                setEventInfo({ id: ev.id, title: ev.title })
                            }
                            lat={ev.geometries[i].coordinates[1]}
                            lng={ev.geometries[i].coordinates[0]}
                        />
                    );
                }
            });
        } else {
            return null;
        }
    });

    const fireMarkers = eventData.map((ev, i) => {
        if (ev.categories[0].id === 8) {
            return (
                <Marker
                    onClick={() => setEventInfo({ id: ev.id, title: ev.title })}
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                />
            );
        }
        return null;
    });

    if (isWildfire) {
        return (
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyBmSxFoC3p2CH8ToKG8XUBAUqM4kEIUhjI",
                    }}
                    defaultCenter={
                        currentPosition
                            ? currentPosition.center
                            : defaultProps.center
                    }
                    defaultZoom={defaultProps.zoom}
                >
                    {fireMarkers}
                </GoogleMapReact>
            </div>
        );
    } else {
        return (
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyBmSxFoC3p2CH8ToKG8XUBAUqM4kEIUhjI",
                    }}
                    defaultCenter={
                        currentPosition
                            ? currentPosition.center
                            : defaultProps.center
                    }
                    defaultZoom={defaultProps.zoom}
                >
                    {stormMarkers}
                </GoogleMapReact>
            </div>
        );
    }
}
