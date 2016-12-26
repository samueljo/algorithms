import * as React from 'react';
import { Tabs } from './tabs';
// import MazeSolver from './mazesolver/MazeSolver';

interface Algorithm {
  title: string;
  content: any;
}

const algos: Algorithm[] = [
  {title: 'N-Queens', content: 'N-Queens Component Goes Here'},
  // {title: 'Maze Solver', content: <MazeSolver />},
  {title: 'Maze Solver', content: "Maze Solver"},
  {title: 'Other', content: 'Other Algo'}
];

export class Root extends React.Component<undefined, undefined> {
  render() {
    return(
      <div>
        <h1 className='main-header'>ALGORITHMS</h1>
        <div>
          <Tabs algos={algos} />
        </div>
      </div>
    );
  }
}
