import React from 'react';
import RCSlider from 'rc-slider';

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
    const marks = {
      5: '5x5',
      10: '10x10',
      15: '15x15',
      20: '20x20',
      25: '25x25',
      30: '30x30',
    };

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
          <RCSlider
            defaultValue={20}
            min={5}
            max={30}
            onChange={this.modulateSpeed}
            onAfterChange={this.props.setSize}
            marks={marks}
          />
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
