import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes bel

export default function Mapview() {
  return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Map
          initialViewState={{
          longitude: -79.919152,
          latitude:  43.261103,
          zoom: 16
          }}
          style={{width: '100%', height: '100%'}}
          mapStyle="https://tiles.openfreemap.org/styles/bright"
        />
      </div>
  );
}