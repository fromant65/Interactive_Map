import { MapRegions } from "./MapRegions";
import { Region } from "./Region";

const r1 = new Region(
  [
    [0, 0],
    [0, 400],
    [300, 400],
    [300, 0],
  ],
  "Primera Región"
);

const r2 = new Region(
  [
    [0, 400],
    [0, 600],
    [400, 600],
    [400, 400],
  ],
  "Segunda Región"
);

const r3 = new Region(
  [
    [400, 400],
    [400, 600],
    [800, 600],
    [800, 300],
    [600, 500],
  ],
  "Tercera Región"
);

const r4 = new Region(
  [
    [300, 0],
    [300, 400],
    [400, 400],
    [600, 500],
    [800, 300],
    [800, 0],
  ],
  "Cuarta Región"
);

export const mapRegions = new MapRegions([r1, r2, r3, r4]);
