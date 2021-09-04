import React from "react";
import { Icon } from "@iconify/react";

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="storm-marker" onClick={onClick}>
            <Icon icon="gis:point" />
        </div>
    );
};

export default StormMarker;
