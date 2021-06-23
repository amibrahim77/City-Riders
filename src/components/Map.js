import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        width: 800,
        height: 500,
        latitude: 23.777176,
        longitude: 90.399452,
        zoom: 10,
        REACT_APP_MAPBOX_TOKEN:'pk.eyJ1IjoiY29kZWZhaGltIiwiYSI6ImNrbWd2cTA1NDAxYnMyeG1xeGxvaDBkZnUifQ.hK7gvVVR6URP3kKEn9g0jA'
      });
    return (
        <div>
             <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={viewport.REACT_APP_MAPBOX_TOKEN}
    />
        </div>
    );
};

export default Map;