import React from 'react';
import MazeBuilder from './components/MazeBuilder';
import SetupBar from './components/SetupBar';
import AStar from './lib/AStar';
import StartBar from './components/StartBar';

//AStar, BFS

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
      walls: {},
      reset: 0
    };
    this.setSize = this.setSize.bind(this);
    this.aStar = this.aStar.bind(this);
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
    const update = { start: true, end: false, solving: false, reset: 0 };
    this.setState(Object.assign(this.state, update));
  }

  setEnd(e) {
    const update = { start: false, end: true, solving: false, reset: 0 };
    this.setState(Object.assign(this.state, update));
  }

  buildMaze(e) {
    const update = { start: false, end: false, solving: false, reset: 0 };
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

  aStar() {
    const update = { start: false, end: false, solving: true, reset: 0 };
    this.setState(Object.assign(this.state, update));
    const aStar = new AStar(
      this.state.startPoint,
      this.state.endPoint,
      this.state.walls,
      this.state.size
    );
    aStar.solve();
  }

  resetMaze() {
    let update;
    if (this.state.reset) {
      update = {
        start: false, end: false, solving: false, reset: 2, walls: {}
      };
    } else {
      update = {
        start: false, end: false, solving: false, reset: 1
      };
    }
    this.setState(Object.assign(this.state, update));
  }

  render() {
    return (
      <div className='maze-solver'>
        <SetupBar
          setSize={this.setSize}
          size={this.state.size}
          setStart={this.setStart}
          setEnd={this.setEnd}
          buildMaze={this.buildMaze}
          resetMaze={this.resetMaze}
          start={this.state.start}
          end={this.state.end}
          solving={this.state.solving}
          reset={this.state.reset} />
        <MazeBuilder
          size={this.state.size}
          start={this.state.start}
          end={this.state.end}
          reset={this.state.reset}
          setStartPoint={this.setStartPoint}
          setEndPoint={this.setEndPoint}
          setWalls={this.setWalls} />
        <StartBar
          aStar={this.aStar}
          solving={this.state.solving} />
      </div>
    );
  }
}
