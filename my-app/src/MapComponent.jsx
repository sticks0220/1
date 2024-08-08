import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = ({ children }) => {
  const [viewport, setViewport] = useState({
    longitude: 94,
    latitude: 66,
    zoom: 2
  });

  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/satellite-v9");

  const handleStyleChange = (style) => {
    setMapStyle(style);
  };
//Выделить изменение подложки в отдельный стиль?
  return (
    <div className="map">
      <div className="map-style-selector">
        <button onClick={() => handleStyleChange("mapbox://styles/mapbox/satellite-v9")}>Спутник</button> 
        <button onClick={() => handleStyleChange("mapbox://styles/mapbox/streets-v11")}>Улицы</button>
        <button onClick={() => handleStyleChange("mapbox://styles/mapbox/outdoors-v11")}>Наружное</button>
      </div>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxAccessToken="pk.eyJ1Ijoic3RpY2tzMDIyMCIsImEiOiJjbDFpbDVjczYwdW40M2dxdWNwcGltMGoxIn0.kWELbv7_2AW1__dUCeD20A"
        mapStyle={mapStyle}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <div className="Longitude">
          <strong>Долгота:</strong> <span> {viewport.longitude.toFixed(2)}</span>
        </div>
        <div className="Latitude">
          <strong>Широта:</strong> <span>{viewport.latitude.toFixed(2)}</span>
        </div>
        <div className="map-container">
          {children}
        </div>
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;