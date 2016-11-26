import React from 'react';
import MazeBuilder from './components/MazeBuilder';
import SetupBar from './components/SetupBar';
import AStar from './lib/AStar';

//AStar, Dijkstra, BFS

export default class MazeSolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      size: 15,
      start: true,
      end: false,
      solving: false,
      startPoint: null,
      endPoint: null,
      walls: {} };
    this.setSize = this.setSize.bind(this);
    this.solveMaze = this.solveMaze.bind(this);
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.buildMaze = this.buildMaze.bind(this);
    this.setStartPoint = this.setStartPoint.bind(this);
    this.setEndPoint = this.setEndPoint.bind(this);
    this.setWalls = this.setWalls.bind(this);
    this.resetMaze = this.resetMaze.bind(this);
  }

  setSize(e) {
    const update = { size: parseInt(e.values[0]) };
    this.setState(Object.assign(this.state, update));
  }

  setStart(e) {
    const update = { start: true, end: false, solving: false };
    this.setState(Object.assign(this.state, update));
  }

  setEnd(e) {
    const update = { start: false, end: true, solving: false };
    this.setState(Object.assign(this.state, update));
  }

  buildMaze(e) {
    const update = { start: false, end: false, solving: false };
    this.setState(Object.assign(this.state, update));
  }

  setStartPoint(value) {
    const update = { startPoint: value };
    this.setState(Object.assign(this.state, update));
  }

  setEndPoint(value) {
    const update = { endPoint: value };
    this.setState(Object.assign(this.state, update));
  }

  setWalls(id, value) {
    let update = Object.assign(this.state.walls, {});
    if (value === null) {
      delete update[id];
    } else {
      update[id] = value;
    }
    this.setState(Object.assign(this.state, { walls: update }));
  }

  solveMaze() {
    const update = { start: false, end: false, solving: true };
    this.setState(Object.assign(this.state, update));
    const aStar = new AStar(
      this.state.startPoint,
      this.state.endPoint,
      this.state.walls);
    aStar.solve();
  }

  resetMaze() {
    const defaultState = {
      completed: false,
      start: true,
      end: false,
      solving: false,
      startPoint: null,
      endPoint: null,
      walls: {}
    };

    this.setState(Object.assign(this.state, defaultState));
  }

  render() {
    return (
      <div className='maze-solver'>
        <SetupBar
          setSize={this.setSize}
          solveMaze={this.solveMaze}
          size={this.state.size}
          setStart={this.setStart}
          setEnd={this.setEnd}
          buildMaze={this.buildMaze}
          resetMaze={this.resetMaze}
          start={this.state.start}
          end={this.state.end}
          solving={this.state.solving} />
        <MazeBuilder
          size={this.state.size}
          start={this.state.start}
          end={this.state.end}
          setStartPoint={this.setStartPoint}
          setEndPoint={this.setEndPoint}
          setWalls={this.setWalls}
          reset={this.state.reset} />
      </div>
    );
  }
}
