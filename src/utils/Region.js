export class Region {
  constructor(points, name) {
    this.points = [];
    for (let point in points) {
      this.points.push(points[point]);
    }
    this.name = name;
  }

  getNextPoint(currentPoint) {
    //Como this.points es un array, current point es la posición de un punto en el mismo
    //Devuelve el punto que le sigue a currentPoint
    let x, y;
    if (currentPoint === this.points.length - 1) {
      x = this.points[0][0];
      y = this.points[0][1];
    } else {
      x = this.points[currentPoint + 1][0];
      y = this.points[currentPoint + 1][1];
    }
    return [x, y];
  }
  getPointX(currentPoint) {
    //Devuelve la coordenada X del punto en la posición currentPoint
    return this.points[currentPoint][0];
  }
  getPointY(currentPoint) {
    //Devuelve la coordenada Y del punto en la posición currentPoint
    return this.points[currentPoint][1];
  }
  getAmountOfPoints() {
    return this.points.length;
  }
}
