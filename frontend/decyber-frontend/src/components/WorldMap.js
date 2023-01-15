import React from 'react';
import {ReactComponent as ReactLogo} from './world.svg';
import "../styles/worldmap.css"

const WorldMap = () => {
  return (
    <div className="WorldMap">
      <ReactLogo />
    </div>
  );
}
export default WorldMap;