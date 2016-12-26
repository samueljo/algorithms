"use strict";
const React = require("react");
const Headers_1 = require("./Headers");
class Tabs extends React.Component {
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
        return (React.createElement("div", { className: 'tabs' },
            React.createElement(Headers_1.Headers, { selectedPane: this.state.selectedPane, selectTab: this.selectTab, algos: this.props.algos }),
            React.createElement("div", { className: 'tab-content' }, pane.content)));
    }
}
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map