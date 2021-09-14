import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/navbar/Navbar";
import EventsBar from "./components/events-bar/EventsBar";

import "./styles/App.css";
import "./styles/styles.css";
import LeafletMap from "./components/map/LeafletMap";

function App() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isWildfire, setIsWildfire] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await fetch(
                "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
            );
            const { events } = await res.json();

            setEventData(events);
            setLoading(false);
        };

        fetchEvents();
    }, []);

    function selectIsWildfire() {
        setIsWildfire(true);
    }

    function selectIsStorm() {
        setIsWildfire(false);
    }

    return (
        <div
            style={loading ? { background: "#fff" } : { background: "#f3f2ef" }}
            className="App"
        >
            <Navbar
                isWildfire={isWildfire}
                selectIsWildfire={selectIsWildfire}
                selectIsStorm={selectIsStorm}
            />

            {!loading ? (
                <>
                    <LeafletMap eventData={eventData} /> <EventsBar />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default App;
