import React from 'react';
import Rheostat from 'rheostat';

export default class SetupBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let startClass;
    let endClass;
    let buildMazeClass;
    if (this.props.start) {
      startClass = 'maze-button active';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button';
    } else if (this.props.end) {
      startClass = 'maze-button';
      endClass = 'maze-button active';
      buildMazeClass = 'maze-button';
    } else {
      startClass = 'maze-button';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button active';
    }

    return(
      <div className='sidebar'>
        <div className='slider'>
          <span className='slider-label'>Maze Size</span>
          <Rheostat
            className='rheostat'
            onChange={this.props.setSize}
            min={5}
            max={25}
            values={[this.props.size]}
          />
        <div className='slider-markers'>
          <span>5</span>
          <span className='slider-val'>{this.props.size}</span>
          <span>25</span>
        </div>
        </div>
        <button
          className={startClass}
          onClick={this.props.setStart}>Set Start</button>
        <button
          className={endClass}
          onClick={this.props.setEnd}>Set End</button>
        <button
          className={buildMazeClass}
          onClick={this.props.buildMaze}>Build Maze</button>
      </div>
    );
  }
}
