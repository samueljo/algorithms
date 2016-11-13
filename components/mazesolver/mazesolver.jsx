import React from 'react';
import Maze from './components/maze';
import SetupBar from './components/setupBar';

export default class MazeSolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      size: 15,
      start: true,
      end: false,
      startPoint: null,
      endPoint: null,
      walls: {} };
    this.setSize = this.setSize.bind(this);
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.buildMaze = this.buildMaze.bind(this);
    this.setStartPoint = this.setStartPoint.bind(this);
    this.setEndPoint = this.setEndPoint.bind(this);
    this.setWalls = this.setWalls.bind(this);
    this.test = this.test.bind(this);
  }

  setSize(e) {
    const update = { size: parseInt(e.values[0]) };
    this.setState(Object.assign(this.state, update));
  }

  setStart(e) {
    const update = { start: true, end: false };
    this.setState(Object.assign(this.state, update));
  }

  setEnd(e) {
    const update = { start: false, end: true };
    this.setState(Object.assign(this.state, update));
  }

  buildMaze(e) {
    const update = { start: false, end: false };
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

  render() {
    return (
      <div className='maze-solver'>
        <SetupBar
          setSize={this.setSize}
          size={this.state.size}
          setStart={this.setStart}
          setEnd={this.setEnd}
          buildMaze={this.buildMaze}
          start={this.state.start}
          end={this.state.end} />
        <Maze
          size={this.state.size}
          start={this.state.start}
          end={this.state.end}
          setStartPoint={this.setStartPoint}
          setEndPoint={this.setEndPoint}
          setWalls={this.setWalls} />
      </div>
    );
  }
}
