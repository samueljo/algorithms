import React from 'react';

export default class Maze extends React.Component {
  constructor(props) {
    super(props);
  }

  createCols() {
    const cols = [];
    for (let i = 0; i < this.props.size; i++) {
      cols.push(<td id={i}></td>);
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
