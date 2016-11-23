import Maze from './Maze';
import Node from './Node';

export default class AStar {
  constructor(startPoint, endPoint, wall) {
    this.startNode = new Node(Maze.toPosArray(startPoint), 0, 0, 0, 0);
    this.endNode = new Node(Maze.toPosArray(endPoint), 0, 0, 0, 0);

    this.wall = wall;

    this.openPath = [this.startNode];
    this.closedPath = [];
  }

  solve() {
    const path = this._getPath();
    this._drawPath(path);
  }

  _drawPath(path) {
    for (let i = 0; i < path.length; i++) {
      let temp = path[i];
      let space = document.getElementById(`${temp.pos[0]} x ${temp.pos[1]}`);
      debugger
      space.className += ' path';
    }
  }

  _deleteAt(idx) {
    this.openPath.splice(idx, 1);
    return;
  }

  _findNextNode(node) {
    const adjSquares = Maze.walkable(this.wall, node.pos);

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

  _getPath() {
    while (this.openPath.length > 0) {
      let bestNodeIdx = this._getBestNodeIdx();
      let currentNode = this.openPath[bestNodeIdx];
      let path;

      if (this._isSamePos(currentNode.pos, this.endNode.pos)) {
        path = [this.endNode];
        this._traceEndToStart(currentNode, path);
        return path;
      }
      this._deleteAt(bestNodeIdx);

      this.closedPath.push(currentNode);

      this._findNextNode(currentNode);
    }
    console.log('No path found!');
  }

  _getBestNodeIdx() {
    let lowParent = 0;
    for (let i = 0; i < this.openPath.length; i++) {
      if (this.openPath[i].fCost < this.openPath[lowParent].fCost) {
        lowParent = i;
      }
    }
    return lowParent;
  }

  _inOpenPath(node) {
    for (let i = 0; i < this.openPath.length; i++) {
      if (this._isSamePos(this.openPath[i].pos, node)) {
        return true;
      }
    }
    return false;
  }

  _inClosedPath(node) {
    for (let i = 0; i < this.closedPath.length; i++) {
      if (this._isSamePos(this.closedPath[i].pos, node)) {
        return true;
      }
    }
    return false;
  }

  _isSamePos(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1]);
  }

  _gCost(current, next) {
    const currentRow = current[0];
    const currentCol = current[1];
    const nextRow = next[0];
    const nextCol = next[1];

    return (currentRow === nextRow || currentCol === nextCol) ? 10 : 14;
  }

  _hCost(next) {
    const nextRow = next[0];
    const nextCol = next[1];
    const finalRow = this.endNode.pos[0];
    const finalCol = this.endNode.pos[1];

    return (Math.abs(finalRow - nextRow) + Math.abs(finalCol - nextCol)) * 10;
  }

  _traceEndToStart(currentNode, path) {
    while (currentNode.parent !== 0) {
      currentNode = this.closedPath[currentNode.parent];
      path.unshift(currentNode);
    }
    return;
  }
}
