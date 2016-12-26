"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Headers = (function (_super) {
    __extends(Headers, _super);
    function Headers() {
        return _super.apply(this, arguments) || this;
    }
    Headers.prototype.render = function () {
        var _this = this;
        var selected = this.props.selectedPane;
        var headers = this.props.algos.map(function (pane, idx) {
            var title = pane.title;
            var klass = 'tab';
            if (idx === selected) {
                klass = 'active tab';
            }
            return (React.createElement("span", { key: idx, className: klass, onClick: _this.props.selectTab.bind(null, idx) },
                title,
                ' '));
        });
        return (React.createElement("div", { className: 'tab-header' }, headers));
    };
    return Headers;
}(React.Component));
exports.Headers = Headers;
//# sourceMappingURL=Headers.js.map