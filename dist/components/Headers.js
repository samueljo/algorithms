"use strict";
const React = require("react");
class Headers extends React.Component {
    render() {
        let selected = this.props.selectedPane;
        let headers = this.props.algos.map((pane, idx) => {
            let title = pane.title;
            let klass = 'tab';
            if (idx === selected) {
                klass = 'active tab';
            }
            return (React.createElement("span", { key: idx, className: klass, onClick: this.props.selectTab.bind(null, idx) },
                title,
                ' '));
        });
        return (React.createElement("div", { className: 'tab-header' }, headers));
    }
}
exports.Headers = Headers;
//# sourceMappingURL=headers.js.map