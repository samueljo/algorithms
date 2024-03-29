import * as React from 'react';
import Rheostat from 'rheostat';

interface SetupBarProps {
  setSize: { (e: any): void } ;
  size: number;
  setStart: { (e: any): void } ;
  setEnd: { (e: any): void } ;
  buildMaze: { (e: any): void } ;
  resetMaze: { (): void } ;
  start: boolean;
  end: boolean;
  solving: boolean;
  reset: number;
}

export class SetupBar extends React.Component<SetupBarProps, undefined> {
  constructor(props: SetupBarProps) {
    super(props);
  }

  render() {
    let startClass: string;
    let endClass: string;
    let buildMazeClass: string;
    let resetClass: string;
    if (this.props.start) {
      startClass = 'maze-button active';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button';
      resetClass = 'maze-button';
    } else if (this.props.end) {
      startClass = 'maze-button';
      endClass = 'maze-button active';
      buildMazeClass = 'maze-button';
      resetClass = 'maze-button';
    } else if (this.props.solving) {
      startClass = 'maze-button';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button';
      resetClass = 'maze-button';
    } else if (this.props.reset) {
      startClass = 'maze-button';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button';
      resetClass = 'maze-button active';
    } else {
      startClass = 'maze-button';
      endClass = 'maze-button';
      buildMazeClass = 'maze-button active';
      resetClass = 'maze-button';
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
        <button
          className={resetClass}
          onClick={this.props.resetMaze}>Reset/Clear Maze</button>
      </div>
    );
  }
}
