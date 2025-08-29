import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes bel
import Mapview from '../components/MapView';
import Health from '../components/Health';
import Round from '../components/Round';
import HomeButton from '../components/HomeButton';
import { Home } from './home';

export function Game() {
  return (
    <div>
      <Mapview />
      <div className="absolute top-5 right-5">
        <Health health={1201} maxHealth={6000} />
      </div>
      <div className="absolute top-5 left-5 flex center-items gap-3">
        <Round Round={1} />
         <HomeButton />
      </div>
    </div>
  );
}
