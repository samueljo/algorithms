import React from 'react';

export default class StartBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let aStarClass;
    let otherClass;
    if (this.props.start) {
      aStarClass = 'maze-button active';
      otherClass = 'maze-button';
    } else {
      aStarClass = 'maze-button';
      otherClass = 'maze-button';
    }

    return(
      <div className='sidebar'>
        <button
          className={aStarClass}
          onClick={this.props.solveMaze}>aStar Algo</button>
        <button
          className={otherClass}>Other Algo</button>
      </div>
    );
  }
}
