"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var StartBar = (function (_super) {
    __extends(StartBar, _super);
    function StartBar(props) {
        return _super.call(this, props) || this;
    }
    StartBar.prototype.render = function () {
        var aStarClass;
        var otherClass;
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
    };
    return StartBar;
}(React.Component));
exports.StartBar = StartBar;
//# sourceMappingURL=StartBar.js.map