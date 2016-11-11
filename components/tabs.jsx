import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.algos.map((pane, idx) => {
      let title = pane.title;
      let klass = 'tab';
      if (idx === selected) {
        klass = 'active tab';
      }
      return (
        <span
          key={idx}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, idx)}>
          {title}{' '}
        </span>
      );
    });
    return (
      <div className='tab-header'>
        {headers}
      </div>
    );
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPane: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    let pane = this.props.algos[this.state.selectedPane];

    return (
      <div className='tabs'>
        <Headers
          selectedPane={this.state.selectedPane}
          onTabChosen={this.selectTab}
          algos={this.props.algos}>
        </Headers>
        <div className='tab-content'>
          {pane.content}
        </div>
      </div>
    );
  }
}
