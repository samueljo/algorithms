export class Node {
  pos: number[];
  parent: number;
  gCost: number;
  hCost: number;
  fCost: number;

  constructor(pos: number[], parent: number, gCost: number, hCost: number, fCost: number) {
    this.pos = pos;
    this.parent = parent;
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = fCost;
  }
}
