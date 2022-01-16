import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      mapStyle="mapbox://styles/ebrajgrg/ckyh0vxg21ugm15oaq7xz9y97"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div className="" key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <p
              onClick={() => {
                setSelectedLocation(result);
              }}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => {
                setSelectedLocation({});
              }}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
