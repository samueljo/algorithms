import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAlgo: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedAlgo: num });
  }

  render() {
    let algo = this.props.algos[this.state.selectedAlgo];

    return (
      <div>
        <h1>Algos</h1>
        <div className='tabs'>
          ALGOS
        </div>
      </div>
    );
  }
}

export default Tabs;
