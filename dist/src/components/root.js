"use strict";
const React = require("react");
const tabs_1 = require("./tabs");
const MazeSolver_1 = require("./mazesolver/MazeSolver");
const algos = [
    { title: 'N-Queens', content: 'N-Queens Component Goes Here' },
    { title: 'Maze Solver', content: React.createElement(MazeSolver_1.MazeSolver, null) },
    { title: 'Other', content: 'Other Algo' }
];
class Root extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", { className: 'main-header' }, "ALGORITHMS"),
            React.createElement("div", null,
                React.createElement(tabs_1.Tabs, { algos: algos }))));
    }
}
exports.Root = Root;
//# sourceMappingURL=root.js.map