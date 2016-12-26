export class Node {
  pos: any;
  parent: any;
  gCost: number;
  hCost: number;
  fCost: number;

  constructor(pos, parent, gCost, hCost, fCost) {
    this.pos = pos;
    this.parent = parent;
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = fCost;
  }
}
