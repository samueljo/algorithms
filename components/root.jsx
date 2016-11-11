import React from 'react';
import Tabs from './tabs';
import Maze from './mazesolver/maze';

const algos = [
  {title: 'N-Queens', content: 'N-Queens Component Goes Here'},
  {title: 'Maze Solver', content: <Maze />},
  {title: 'Other', content: 'Other Algo'}
];

// algos is array of React components (queens, mazesolver...)

export default class Root extends React.Component {
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
