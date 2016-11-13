import React from 'react';

export default class Maze extends React.Component {
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
        id={i}
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
      rows.push(<tr id={i} className='maze-row'>{cols}</tr>);
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
        this.startPoint = false;
      } else if (className === 'end') {
        this.endPoint = false;
      }
      e.target.className = 'maze-space';
    } else if (this.noStartOrEndPoint(className)) {
      e.target.className += ` ${className}`;
    } else if (className === 'wall') {
      e.target.className += ` ${className}`;
    }
  }

  noStartOrEndPoint(className) {
    if (className === 'start' && !this.startPoint) {
      this.startPoint = true;
      return true;
    } else if (className === 'end' && !this.endPoint) {
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
