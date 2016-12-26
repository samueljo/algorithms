"use strict";
const React = require("react");
const headers_1 = require("./headers");
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
            React.createElement(headers_1.Headers, { selectedPane: this.state.selectedPane, selectTab: this.selectTab, algos: this.props.algos }),
            React.createElement("div", { className: 'tab-content' }, pane.content)));
    }
}
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map