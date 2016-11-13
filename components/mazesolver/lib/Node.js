export default class Node {
  constructor(pos, parent, gCost, hCost, fCost) {
    this.pos = pos;
    this.parent = parent;
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = fCost;
  }
}
