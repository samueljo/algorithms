import React from 'react';
import Maze from './components/maze';
import SetupBar from './components/setupBar';

export default class MazeSolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completed: false, size: 20 };
    this.setSize = this.setSize.bind(this);
  }

  setSize(e) {
    this.setState({ size: parseInt(e.value) });
  }

  render() {
    return (
      <div className='maze-solver'>
        <SetupBar setSize={this.setSize} />
        <Maze size={this.state.size} />
      </div>
    );
  }
}
