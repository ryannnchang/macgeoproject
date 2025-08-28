import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes bel
import Mapview from '../components/MapView';

export function Game() {
  return (
    <>
    <Mapview />
    </>
  );
}
