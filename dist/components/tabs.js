"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var headers_1 = require("./headers");
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectedPane: 0 };
        _this.selectTab = _this.selectTab.bind(_this);
        return _this;
    }
    Tabs.prototype.selectTab = function (num) {
        this.setState({ selectedPane: num });
    };
    Tabs.prototype.render = function () {
        var pane = this.props.algos[this.state.selectedPane];
        return (React.createElement("div", { className: 'tabs' },
            React.createElement(headers_1.Headers, { selectedPane: this.state.selectedPane, selectTab: this.selectTab, algos: this.props.algos }),
            React.createElement("div", { className: 'tab-content' }, pane.content)));
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map