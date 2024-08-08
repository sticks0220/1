import React, { useState } from 'react';
import './GeoJSONImport.css';

const GeoJSONImport = ({ onImport }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        if (typeof onImport === 'function') {
          onImport(content,  file.name);
        }
        setLoading(false);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="geojson-import-container">
      <h3>Импорт векторных данных</h3>
      <input type="file" accept=".geojson" onChange={handleFileChange} />
    </div>
  );
};

export default GeoJSONImport;