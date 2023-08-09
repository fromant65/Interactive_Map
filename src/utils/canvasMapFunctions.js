import robustPointInPolygon from "robust-point-in-polygon";
const classifyPoint = robustPointInPolygon;

function setUpCtx({ ctx, stroke, fill, width }) {
  if (stroke) ctx.strokeStyle = stroke;
  if (fill) ctx.fillStyle = fill;
  if (width) ctx.lineWidth = width;
  return ctx;
}

export function drawMap(mapRegions, region) {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx = setUpCtx({ ctx, stroke: "#000", width: "1" });
  // Recorremos las regiones
  for (let i = 0; i < mapRegions.getAmountOfRegions(); i++) {
    let currRegion = mapRegions.getRegion(i);
    ctx = setUpCtx({ ctx, stroke: "#000", width: "1" });
    ctx.beginPath();
    // Recorremos los puntos de cada región
    for (let j = 0; j < currRegion.getAmountOfPoints(); j++) {
      let currX = currRegion.getPointX(j);
      let currY = currRegion.getPointY(j);
      let [nextX, nextY] = currRegion.getNextPoint(j);
      if (j === 0) ctx.moveTo(currX, currY);
      ctx.lineTo(nextX, nextY);
    }
    ctx.closePath();
    ctx.stroke();
    if (currRegion.name === region) {
      ctx = setUpCtx({ ctx, fill: "#11ff66" });
    } else {
      ctx = setUpCtx({ ctx, fill: "#fff" });
    }
    ctx.fill();
  }
}

export function selectPoint(e) {
  //client.x - dif.left = 0 en la esquina superior izquierda del canvas
  //client.y - dif.top = 0 en la esquina superior izquierda del canvas
  const dif = e.target.getBoundingClientRect();
  let difX = e.clientX - dif.left;
  let difY = e.clientY - dif.top;
  return [difX, difY];
}

export function checkPointInside(newPoint, mapRegions) {
  //Chequea adentro de qué región está el punto y devuelve su nombre
  let x = newPoint[0];
  let y = newPoint[1];
  for (let i = 0; i < mapRegions.getAmountOfRegions(); i++) {
    let currRegion = mapRegions.getRegion(i);
    if (classifyPoint(currRegion.points, [x, y]) < 1) {
      drawRegion(currRegion);
      return currRegion.name;
    }
  }
}

function drawRegion(region) {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx = setUpCtx({ ctx, fill: "#11ee11", stroke: "#2f2", width: "1" });
  for (let j = 0; j < region.getAmountOfPoints(); j++) {
    let x = region.getPointX(j);
    let y = region.getPointY(j);
    let [nextX, nextY] = region.getNextPoint(j);
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();
  }

  ctx.closePath();
  ctx.fill();
}
