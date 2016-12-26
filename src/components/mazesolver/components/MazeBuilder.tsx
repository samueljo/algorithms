import * as React from 'react';

interface MazeBuilderState {
  startPoint: boolean;
  endPoint: boolean;
  wallBuilder: boolean;
}

interface MazeBuilderProps {
  size: number;
  start: boolean;
  end: boolean;
  reset: number;
  setStartPoint: { (value: any): void } ;
  setEndPoint: { (value: any): void } ;
  setWalls: { (id: any, value: any): void } ;
}

export class MazeBuilder extends React.Component<MazeBuilderProps, MazeBuilderState> {
  constructor(props: MazeBuilderProps) {
    super(props);
    this.state = {
      startPoint: false,
      endPoint: false,
      wallBuilder: false
    };
    this.toggleSpace = this.toggleSpace.bind(this);
    this.toggleWall = this.toggleWall.bind(this);
  }

  shouldComponentUpdate(nextProps: any): boolean | void {
    if (nextProps.reset) {
      this.resetMaze(nextProps.reset);
      this.setState({
        startPoint: false,
        endPoint: false,
        wallBuilder: false
      });
    }
    return true;
  }

  createCols(row) {
    const cols = [];
    for (let i = 0; i < this.props.size; i++) {
      cols.push(<td
        key={i}
        id={`${row} x ${i}`}
        className='maze-space'
        onClick={this.toggleSpace}
        onMouseOver={this.toggleWall}></td>);
    }
    return cols;
  }

  createRows() {
    const rows = [];
    let cols;
    for (let i = 0; i < this.props.size; i++) {
      cols = this.createCols(i);
      rows.push(<tr key={i} className='maze-row'>{cols}</tr>);
    }
    return rows;
  }

  toggleSpace(e) {
    if (this.props.start) {
      this.toggleSpaceClass(e, 'start');
    } else if (this.props.end) {
      this.toggleSpaceClass(e, 'end');
    } else if (this.props.reset) {
      return;
    } else {
      this.toggleWallBuilder(e);
    }
  }

  toggleWall(e) {
    const className = e.target.className;
    if (this.state.wallBuilder) {
      if (className === 'maze-space' || className === 'maze-space wall') {
        this.toggleSpaceClass(e, 'wall');
      }
    }
  }

  toggleWallBuilder(e) {
    this.setState({
      startPoint: this.state.startPoint,
      endPoint: this.state.endPoint,
      wallBuilder: !this.state.wallBuilder
    });
    this.toggleWall(e);
  }

  toggleSpaceClass(e, className) {
    if (e.target.className.includes(className)) {
      if (className === 'start') {
        this.props.setStartPoint(null);
        this.setState({
          startPoint: false,
          endPoint: this.state.endPoint,
          wallBuilder: !this.state.wallBuilder
        });
      } else if (className === 'end') {
        this.props.setEndPoint(null);
        this.setState({
          startPoint: this.state.startPoint,
          endPoint: false,
          wallBuilder: !this.state.wallBuilder
        });
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
    if (className === 'start' && !this.state.startPoint) {
      this.props.setStartPoint(e.target);
      this.state.startPoint = true;
      return true;
    } else if (className === 'end' && !this.state.endPoint) {
      this.props.setEndPoint(e.target);
      this.setState({
        startPoint: this.state.startPoint,
        endPoint: true,
        wallBuilder: !this.state.wallBuilder
      });
      return true;
    } else {
      return false;
    }
  }

  resetMaze(nextPropsReset) {
    const mazeSpaces = document.getElementsByClassName('maze-space');
    if (nextPropsReset === 2) {
      for (let i = 0; i < mazeSpaces.length; i++) {
        mazeSpaces[i].className = 'maze-space';
      }
    } else {
      for (let i = 0; i < mazeSpaces.length; i++) {
        if (mazeSpaces[i].className === 'maze-space path') {
          mazeSpaces[i].className = 'maze-space';
        }
      }
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
