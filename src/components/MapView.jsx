import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export default function MapView() {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <div className="rounded-[10px] bg-white flex-3">
      <div className="w-full h-89 rounded-[5px] overflow-hidden mt-2 relative">
        {isMapLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-[6px] border-gray-300 border-t-black rounded-full animate-spin"></div>
              <span className="text-lg font-semibold text-gray-700">
                Loading map...
              </span>
            </div>
          </div>
        )}

        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: 2.1171,
            latitude: 13.512,
            zoom: 10,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          onLoad={() => setIsMapLoading(false)}
        />
      </div>
    </div>
  );
}
