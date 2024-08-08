import React, { useState } from 'react';
import { Source, Layer } from 'react-map-gl';
import './App.css';

const Layers = ({ layers }) => {
  const [layerVisibility, setLayerVisibility] = useState(layers.map(() => true));

  const toggleLayerVisibility = (index) => {
    const newVisibility = [...layerVisibility];
    newVisibility[index] = !newVisibility[index];
    setLayerVisibility(newVisibility);
  };

  return (
    <div className="map-rectangle">
      <div className="layers-panel">
        {layers.map((layer, index) => (
          <div key={index} className="layer-control">
            <input
              type="checkbox"
              checked={layerVisibility[index]}
              onChange={() => toggleLayerVisibility(index)}
            />
            <label>{layer.name} </label>
          </div>
        ))}
      </div>
      {layers.map((layer, index) => (
        layerVisibility[index] && (
          <Source key={index} id={`geojson-source-${index}`} type="geojson" data={layer}>
            <Layer
              id={`geojson-layer-${index}`}
              type="fill"
              paint={{
                'fill-color': '#007cbf',
                'fill-opacity': 0.5
              }}
            />
          </Source>
        )
      ))}
    </div>
  );
};

export default Layers;