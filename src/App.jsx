import React, { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map";

export const PointContext = React.createContext();

function App() {
  const [point, setPoint] = useState([0, 0]);
  const [currRegion, setCurrRegion] = useState(undefined);
  return (
    <div className="App">
      <PointContext.Provider
        value={{ point, setPoint, currRegion, setCurrRegion }}
      >
        <Map></Map>
      </PointContext.Provider>
      <div className="region-info">
        <div>
          <b>Region:</b> {currRegion}
        </div>
        <div>
          <b>Coordenadas:</b> x:{point[0]} y:{point[1]}
        </div>
      </div>
    </div>
  );
}

export default App;
