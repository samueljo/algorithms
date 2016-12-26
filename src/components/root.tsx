import * as React from "react";
import { Tabs } from './tabs';
import { MazeSolver } from './mazesolver/MazeSolver';

export interface Algorithm {
  title: string;
  content: any;
}

interface RootProps {
  compiler: string;
  framework: string;
}

const algos: Algorithm[] = [
  {title: 'N-Queens', content: 'N-Queens Component Goes Here'},
  {title: 'Maze Solver', content: <MazeSolver />},
  {title: 'Other', content: 'Other Algo'}
];

export class Root extends React.Component<RootProps, undefined> {
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
