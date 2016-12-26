import { Maze } from './Maze';
import { Node } from './Node';

export class AStar {
  startNode: Node;
  endNode: Node;
  wall: any;
  upperLimit: number;
  openPath: Node[];
  closedPath: Node[];

  constructor(startPoint: Node, endPoint: Node, wall: any, upperLimit: number) {
    this.startNode = new Node(Maze.toPosArray(startPoint), 0, 0, 0, 0);
    this.endNode = new Node(Maze.toPosArray(endPoint), 0, 0, 0, 0);

    this.wall = wall;
    this.upperLimit = upperLimit;

    this.openPath = [this.startNode];
    this.closedPath = [];
  }

  solve(): void {
    let i: number = 0;
    const path: Node[] = this._getPath();
    this._drawPath(path, i);
  }

  _drawPath(path: Node[], i: number): void {
    setTimeout(() => {
      if (i < path.length) {
        let temp = path[i];
        let space = document.getElementById(`${temp.pos[0]} x ${temp.pos[1]}`);
        space.className += ' path';
        i += 1;
        this._drawPath(path, i);
      }
    }, 100);
  }

  _deleteAt(idx: number): void {
    this.openPath.splice(idx, 1);
    return;
  }

  _findNextNode(node: Node): void {
    const adjSquares = Maze.walkable(this.wall, node.pos, this.upperLimit);

    for (let i = 0; i < adjSquares.length; i++) {
      let temp = adjSquares[i];
      if (!this._inOpenPath(temp) && !this._inClosedPath(temp)) {
        let gCost = this._gCost(node.pos, temp);
        let hCost = this._hCost(temp);
        let fCost = gCost + hCost;

        let parentIdx = this.closedPath.length - 1;

        let newNode = new Node(temp, parentIdx, gCost, hCost, fCost);
        this.openPath.push(newNode);
      }
    }
    return;
  }

  _getPath(): Node[] {
    while (this.openPath.length > 0) {
      let bestNodeIdx: number = this._getBestNodeIdx();
      let currentNode: Node = this.openPath[bestNodeIdx];
      let path: Node[];

      if (this._isSamePos(currentNode.pos, this.endNode.pos)) {
        path = [this.endNode];
        this._traceEndToStart(currentNode, path);
        return path;
      }
      this._deleteAt(bestNodeIdx);

      this.closedPath.push(currentNode);

      this._findNextNode(currentNode);
    }
    return [];
  }

  _getBestNodeIdx(): number {
    let lowParent: number = 0;
    for (let i = 0; i < this.openPath.length; i++) {
      if (this.openPath[i].fCost < this.openPath[lowParent].fCost) {
        lowParent = i;
      }
    }
    return lowParent;
  }

  _inOpenPath(node: number[]): boolean {
    for (let i = 0; i < this.openPath.length; i++) {
      if (this._isSamePos(this.openPath[i].pos, node)) {
        return true;
      }
    }
    return false;
  }

  _inClosedPath(node: number[]): boolean {
    for (let i = 0; i < this.closedPath.length; i++) {
      if (this._isSamePos(this.closedPath[i].pos, node)) {
        return true;
      }
    }
    return false;
  }

  _isSamePos(pos1: number[], pos2: number[]): boolean {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1]);
  }

  _gCost(current: number[], next: number[]): number {
    const currentRow: number = current[0];
    const currentCol: number = current[1];
    const nextRow: number = next[0];
    const nextCol: number = next[1];

    return (currentRow === nextRow || currentCol === nextCol) ? 10 : 14;
  }

  _hCost(next: number[]): number {
    const nextRow: number = next[0];
    const nextCol: number = next[1];
    const finalRow: number = this.endNode.pos[0];
    const finalCol: number = this.endNode.pos[1];

    return (Math.abs(finalRow - nextRow) + Math.abs(finalCol - nextCol)) * 10;
  }

  _traceEndToStart(currentNode: Node, path: Node[]): void {
    while (currentNode.parent !== 0) {
      currentNode = this.closedPath[currentNode.parent];
      path.unshift(currentNode);
    }
    return;
  }
}
