export class MapRegions {
  constructor(regions) {
    this.regions = [];
    for (let region in regions) {
      this.regions.push(regions[region]);
    }
  }
  getRegions() {
    return this.regions;
  }
  getAmountOfRegions() {
    return this.regions.length;
  }
  getRegion(currentRegion) {
    return this.regions[currentRegion];
  }
}
