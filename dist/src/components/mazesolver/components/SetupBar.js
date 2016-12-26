"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var rheostat_1 = require("rheostat");
var SetupBar = (function (_super) {
    __extends(SetupBar, _super);
    function SetupBar(props) {
        return _super.call(this, props) || this;
    }
    SetupBar.prototype.render = function () {
        var startClass;
        var endClass;
        var buildMazeClass;
        var resetClass;
        if (this.props.start) {
            startClass = 'maze-button active';
            endClass = 'maze-button';
            buildMazeClass = 'maze-button';
            resetClass = 'maze-button';
        }
        else if (this.props.end) {
            startClass = 'maze-button';
            endClass = 'maze-button active';
            buildMazeClass = 'maze-button';
            resetClass = 'maze-button';
        }
        else if (this.props.solving) {
            startClass = 'maze-button';
            endClass = 'maze-button';
            buildMazeClass = 'maze-button';
            resetClass = 'maze-button';
        }
        else if (this.props.reset) {
            startClass = 'maze-button';
            endClass = 'maze-button';
            buildMazeClass = 'maze-button';
            resetClass = 'maze-button active';
        }
        else {
            startClass = 'maze-button';
            endClass = 'maze-button';
            buildMazeClass = 'maze-button active';
            resetClass = 'maze-button';
        }
        return (React.createElement("div", { className: 'sidebar' },
            React.createElement("div", { className: 'slider' },
                React.createElement("span", { className: 'slider-label' }, "Maze Size"),
                React.createElement(rheostat_1.default, { className: 'rheostat', onChange: this.props.setSize, min: 5, max: 25, values: [this.props.size] }),
                React.createElement("div", { className: 'slider-markers' },
                    React.createElement("span", null, "5"),
                    React.createElement("span", { className: 'slider-val' }, this.props.size),
                    React.createElement("span", null, "25"))),
            React.createElement("button", { className: startClass, onClick: this.props.setStart }, "Set Start"),
            React.createElement("button", { className: endClass, onClick: this.props.setEnd }, "Set End"),
            React.createElement("button", { className: buildMazeClass, onClick: this.props.buildMaze }, "Build Maze"),
            React.createElement("button", { className: resetClass, onClick: this.props.resetMaze }, "Reset/Clear Maze")));
    };
    return SetupBar;
}(React.Component));
exports.SetupBar = SetupBar;
//# sourceMappingURL=SetupBar.js.map