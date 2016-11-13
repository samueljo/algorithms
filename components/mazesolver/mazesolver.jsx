import React from 'react';
import Maze from './components/maze';
import SetupBar from './components/setupBar';

export default class MazeSolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completed: false, size: 15, start: true, end: false };
    this.setSize = this.setSize.bind(this);
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.buildMaze = this.buildMaze.bind(this);
  }

  setSize(e) {
    const update = { size: parseInt(e.values[0]) };
    this.setState(Object.assign(this.state, update));
  }

  setStart() {
    const update = { start: true, end: false };
    this.setState(Object.assign(this.state, update));
  }

  setEnd() {
    const update = { start: false, end: true };
    this.setState(Object.assign(this.state, update));
  }

  buildMaze() {
    const update = { start: false, end: false };
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
          start={this.state.start}
          end={this.state.end} />
        <Maze
          size={this.state.size}
          start={this.state.start}
          end={this.state.end} />
      </div>
    );
  }
}
