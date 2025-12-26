import React from "react";
import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MapView = () => {
  return (
    <div className="rounded-[10px] bg-white flex-3">
      <div className="w-full h-[355px] rounded-[5px] overflow-hidden mt-2">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: 2.1171,
            latitude: 13.512,
            zoom: 10,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        />
      </div>
    </div>
  );
};

export default MapView;
