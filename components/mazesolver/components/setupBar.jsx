import React from 'react';
import Rheostat from 'rheostat';

export default class SetupBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setStart: true, setEnd: false };
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
  }

  setStart() {
    this.setState({ setStart: true, setEnd: false });
  }

  setEnd() {
    this.setState({ setStart: false, setEnd: true });
  }

  render() {
    let startClass;
    let endClass;
    if (this.state.setStart) {
      startClass = 'maze-button active';
      endClass = 'maze-button';
    } else {
      startClass = 'maze-button';
      endClass = 'maze-button active';
    }

    return(
      <div className='sidebar'>
        <div className='slider'>
          <span className='slider-label'>Maze Size</span>
          <Rheostat
            className='rheostat'
            onChange={this.props.setSize}
            min={5}
            max={30}
            values={[this.props.size]}
          />
        <div className='slider-markers'>
          <span>5</span>
          <span className='slider-val'>{this.props.size}</span>
          <span>30</span>
        </div>
        </div>
        <button
          className={startClass}
          onClick={this.setStart}>Set Start</button>
        <button
          className={endClass}
          onClick={this.setEnd}>Set End</button>
      </div>
    );
  }
}
