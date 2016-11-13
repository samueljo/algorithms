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

  solve(startPoint, endPoint, walls) {
  }

  _aStar() {
    while (this.openPath.length > 0) {
      let lowParent = 0;
      for (let i = 0; i < this.openPath.length; i++) {
        if (this.openPath[i].fCost < this.openPath[lowParent].fCost) {
          lowParent = i;
        }
      }
    }
  }
}
