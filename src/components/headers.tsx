import * as React from 'react';

interface HeaderProps {
  selectedPane: any;
  algos: any;
  selectTab: {
    (num: number): void;
  };
}

export class Headers extends React.Component<HeaderProps, undefined> {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.algos.map((pane: any, idx: any) => {
      let title = pane.title;
      let klass = 'tab';
      if (idx === selected) {
        klass = 'active tab';
      }
      return (
        <span
          key={idx}
          className={klass}
          onClick={this.props.selectTab.bind(null, idx)}>
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
