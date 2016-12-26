import * as React from "react";
import { Headers } from './Headers';
import { Algorithm } from './Root';

interface TabsProps {
  algos: Algorithm[];
}

interface TabsState {
  selectedPane: number;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);
    this.state = { selectedPane: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num: number): void {
    this.setState({ selectedPane: num });
  }

  render() {
    let pane: Algorithm = this.props.algos[this.state.selectedPane];

    return (
      <div className='tabs'>
        <Headers
          selectedPane={this.state.selectedPane}
          selectTab={this.selectTab}
          algos={this.props.algos}>
        </Headers>
        <div className='tab-content'>
          {pane.content}
        </div>
      </div>
    );
  }
}
