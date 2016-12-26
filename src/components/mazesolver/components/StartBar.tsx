import * as React from 'react';

interface StartBarProps {
  aStar: { (): void; };
  solving: boolean;
}

export class StartBar extends React.Component<StartBarProps, undefined> {
  constructor(props: StartBarProps) {
    super(props);
  }

  render() {
    let aStarClass: string;
    let otherClass: string;
    if (this.props.solving) {
      aStarClass = 'maze-button active';
      otherClass = 'maze-button';
    } else {
      aStarClass = 'maze-button';
      otherClass = 'maze-button';
    }

    return(
      <div className='sidebar'>
        <button
          className={aStarClass}
          onClick={this.props.aStar}>aStar Algo</button>
        <button
          className={otherClass}>Other Algo</button>
      </div>
    );
  }
}
