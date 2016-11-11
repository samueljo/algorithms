import React from 'react';
import Tabs from './tabs';

const algos = [
  {title: 'N-Queens', content: 'I am the first'},
  {title: 'Maze Solver', content: 'Second pane here'}
];

// algos is array of React components (queens, mazesolver...)

class Root extends React.Component {
  render() {
    return(
      <div>
        <h1 className='main-header'>ALGORITHMS</h1>
        <div className='tabs'>
          <Tabs algos={algos} />
        </div>
      </div>
    );
  }
}

export default Root;
