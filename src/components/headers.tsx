import * as React from "react";
import { Algorithm } from './Root';

interface HeaderProps {
  selectedPane: number;
  algos: Algorithm[];
  selectTab: { (num: number): void; };
}

export class Headers extends React.Component<HeaderProps, undefined> {
  render() {
    let selected: number = this.props.selectedPane;
    let headers: any = this.props.algos.map((pane: any, idx: any) => {
      let title: string = pane.title;
      let klass: string = 'tab';
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
