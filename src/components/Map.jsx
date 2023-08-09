import React, { useContext, useEffect, useState } from "react";
import { mapRegions } from "../utils/regionList";
import { PointContext } from "../App";
import {
  checkPointInside,
  drawMap,
  selectPoint,
} from "../utils/canvasMapFunctions";

const Map = () => {
  const { setPoint, currRegion, setCurrRegion } = useContext(PointContext);
  // point: [int, int]
  // currRegion: Region() | undefined
  useEffect(() => {
    drawMap(mapRegions, currRegion);
  }, [currRegion]);

  function manageClickOnMap(e) {
    const newPoint = selectPoint(e);
    setPoint(newPoint);
    let newRegion = checkPointInside(newPoint, mapRegions);
    if (currRegion === newRegion) setCurrRegion(undefined);
    else setCurrRegion(newRegion);
  }

  return (
    <canvas
      id="canvas"
      width="800px"
      height="600px"
      onClick={(e) => {
        manageClickOnMap(e);
      }}
    ></canvas>
  );
};

export default Map;
