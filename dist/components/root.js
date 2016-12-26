"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var tabs_1 = require("./tabs");
var algos = [
    { title: 'N-Queens', content: 'N-Queens Component Goes Here' },
    // {title: 'Maze Solver', content: <MazeSolver />},
    { title: 'Maze Solver', content: "Maze Solver" },
    { title: 'Other', content: 'Other Algo' }
];
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", { className: 'main-header' }, "ALGORITHMS"),
            React.createElement("div", null,
                React.createElement(tabs_1.Tabs, { algos: algos }))));
    };
    return Root;
}(React.Component));
exports.Root = Root;
//# sourceMappingURL=root.js.map