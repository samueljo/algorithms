"use strict";
const React = require("react");
class StartBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let aStarClass;
        let otherClass;
        if (this.props.solving) {
            aStarClass = 'maze-button active';
            otherClass = 'maze-button';
        }
        else {
            aStarClass = 'maze-button';
            otherClass = 'maze-button';
        }
        return (React.createElement("div", { className: 'sidebar' },
            React.createElement("button", { className: aStarClass, onClick: this.props.aStar }, "aStar Algo"),
            React.createElement("button", { className: otherClass }, "Other Algo")));
    }
}
exports.StartBar = StartBar;
//# sourceMappingURL=StartBar.js.map