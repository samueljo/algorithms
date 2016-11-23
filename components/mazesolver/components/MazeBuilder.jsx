import React from 'react';

export default class MazeBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.startPoint = false;
    this.endPoint = false;
    this.toggleSpace = this.toggleSpace.bind(this);
  }

  createCols() {
    const cols = [];
    for (let i = 0; i < this.props.size; i++) {
      cols.push(<td
        key={i}
        className='maze-space'
        onClick={this.toggleSpace}></td>);
    }
    return cols;
  }

  createRows() {
    const rows = [];
    let cols;
    for (let i = 0; i < this.props.size; i++) {
      cols = this.createCols();
      rows.push(<tr key={i} className='maze-row'>{cols}</tr>);
    }
    return rows;
  }

  toggleSpace(e) {
    if (this.props.start) {
      this.toggleSpaceClass(e, 'start');
    } else if (this.props.end) {
      this.toggleSpaceClass(e, 'end');
    } else {
      this.toggleSpaceClass(e, 'wall');
    }
  }

  toggleSpaceClass(e, className) {
    if (e.target.className.includes(className)) {
      if (className === 'start') {
        this.props.setStartPoint(null);
        this.startPoint = false;
      } else if (className === 'end') {
        this.props.setEndPoint(null);
        this.endPoint = false;
      } else if (className === 'wall') {
        this.props.setWalls(e.target.id, null);
      }
      e.target.className = 'maze-space';
    } else if (this.noStartOrEndPoint(e, className)) {
      e.target.className += ` ${className}`;
    } else if (className === 'wall') {
      this.props.setWalls(e.target.id, e.target);
      e.target.className += ` ${className}`;
    }
  }

  noStartOrEndPoint(e, className) {
    if (className === 'start' && !this.startPoint) {
      this.props.setStartPoint(e.target);
      this.startPoint = true;
      return true;
    } else if (className === 'end' && !this.endPoint) {
      this.props.setEndPoint(e.target);
      this.endPoint = true;
      return true;
    } else {
      return false;
    }
  }

  render() {
    const rows = this.createRows();
    return (
      <div className='maze'>
        <table>
          <tbody className='maze-body'>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
