import React, { useState } from 'react';
import GeoJSONImport from './GeoJSONImport';
import MapComponent from './MapComponent';
import Layers from './Layers';

const VisulSait = () => {
  const [layers, setLayers] = useState([]);

  const handleImport = (content) => {
    const newLayer = JSON.parse(content);
    setLayers([...layers, newLayer]);
  };

  return (
    <div>
      <MapComponent>
        <Layers layers={layers} />
        <GeoJSONImport onImport={handleImport} />
      </MapComponent>
    </div>
  );
};

export default VisulSait;