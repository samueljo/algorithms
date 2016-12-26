import * as React from 'react';

interface MazeBuilderProps {
  size: number;
  start: boolean;
  end: boolean;
  reset: number;
  setStartPoint: { (value: any): void } ;
  setEndPoint: { (value: any): void } ;
  setWalls: { (id: any, value: any): void } ;
}

export class MazeBuilder extends React.Component<MazeBuilderProps, undefined> {
  startPoint: boolean;
  endPoint: boolean;
  wallBuilder: boolean;
  constructor(props: MazeBuilderProps) {
    super(props);
    this.startPoint = false;
    this.endPoint = false;
    this.wallBuilder = false;
    this.toggleSpace = this.toggleSpace.bind(this);
    this.toggleWall = this.toggleWall.bind(this);
  }

  shouldComponentUpdate(nextProps: any): boolean | void {
    if (nextProps.reset) {
      this.resetMaze(nextProps.reset);
      this.startPoint = false;
      this.endPoint = false;
      this.wallBuilder = false;
    }
    return true;
  }

  createCols(row: number): any[] {
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

  createRows(): any[] {
    const rows = [];
    let cols;
    for (let i = 0; i < this.props.size; i++) {
      cols = this.createCols(i);
      rows.push(<tr key={i} className='maze-row'>{cols}</tr>);
    }
    return rows;
  }

  toggleSpace(e: any): void {
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

  toggleWall(e: any): void {
    const className: string = e.target.className;
    if (this.wallBuilder) {
      if (className === 'maze-space' || className === 'maze-space wall') {
        this.toggleSpaceClass(e, 'wall');
      }
    }
  }

  toggleWallBuilder(e: any): void {
    this.wallBuilder = !this.wallBuilder;
    this.toggleWall(e);
  }

  toggleSpaceClass(e: any, className: string): void {
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

  noStartOrEndPoint(e: any, className: string): boolean {
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

  resetMaze(nextPropsReset: number): void {
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
    const rows: any[] = this.createRows();

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
