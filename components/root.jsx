import React from 'react';
import Tabs from './tabs';

const algos = [];
// algos is array of React components (queens, mazesolver...)

class Root extends React.Component {
  render() {
    return(
      <div>
        <h1>ALGORITHMS!</h1>
        <div className='tabs'>
          <Tabs algos={algos} />
        </div>
      </div>
    );
  }
}

export default Root;
