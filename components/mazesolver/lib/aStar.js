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

}
