"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MazeBuilder = (function (_super) {
    __extends(MazeBuilder, _super);
    function MazeBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startPoint: false,
            endPoint: false,
            wallBuilder: false
        };
        _this.toggleSpace = _this.toggleSpace.bind(_this);
        _this.toggleWall = _this.toggleWall.bind(_this);
        return _this;
    }
    MazeBuilder.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.reset) {
            this.resetMaze(nextProps.reset);
            this.setState({
                startPoint: false,
                endPoint: false,
                wallBuilder: false
            });
        }
        return true;
    };
    MazeBuilder.prototype.createCols = function (row) {
        var cols = [];
        for (var i = 0; i < this.props.size; i++) {
            cols.push(React.createElement("td", { key: i, id: row + " x " + i, className: 'maze-space', onClick: this.toggleSpace, onMouseOver: this.toggleWall }));
        }
        return cols;
    };
    MazeBuilder.prototype.createRows = function () {
        var rows = [];
        var cols;
        for (var i = 0; i < this.props.size; i++) {
            cols = this.createCols(i);
            rows.push(React.createElement("tr", { key: i, className: 'maze-row' }, cols));
        }
        return rows;
    };
    MazeBuilder.prototype.toggleSpace = function (e) {
        if (this.props.start) {
            this.toggleSpaceClass(e, 'start');
        }
        else if (this.props.end) {
            this.toggleSpaceClass(e, 'end');
        }
        else if (this.props.reset) {
            return;
        }
        else {
            this.toggleWallBuilder(e);
        }
    };
    MazeBuilder.prototype.toggleWall = function (e) {
        var className = e.target.className;
        if (this.state.wallBuilder) {
            if (className === 'maze-space' || className === 'maze-space wall') {
                this.toggleSpaceClass(e, 'wall');
            }
        }
    };
    MazeBuilder.prototype.toggleWallBuilder = function (e) {
        this.setState({
            startPoint: this.state.startPoint,
            endPoint: this.state.endPoint,
            wallBuilder: !this.state.wallBuilder
        });
        this.toggleWall(e);
    };
    MazeBuilder.prototype.toggleSpaceClass = function (e, className) {
        if (e.target.className.includes(className)) {
            if (className === 'start') {
                this.props.setStartPoint(null);
                this.setState({
                    startPoint: false,
                    endPoint: this.state.endPoint,
                    wallBuilder: !this.state.wallBuilder
                });
            }
            else if (className === 'end') {
                this.props.setEndPoint(null);
                this.setState({
                    startPoint: this.state.startPoint,
                    endPoint: false,
                    wallBuilder: !this.state.wallBuilder
                });
            }
            else if (className === 'wall') {
                this.props.setWalls(e.target.id, null);
            }
            e.target.className = 'maze-space';
        }
        else if (this.noStartOrEndPoint(e, className)) {
            e.target.className += " " + className;
        }
        else if (className === 'wall') {
            this.props.setWalls(e.target.id, e.target);
            e.target.className += " " + className;
        }
    };
    MazeBuilder.prototype.noStartOrEndPoint = function (e, className) {
        if (className === 'start' && !this.state.startPoint) {
            this.props.setStartPoint(e.target);
            this.state.startPoint = true;
            return true;
        }
        else if (className === 'end' && !this.state.endPoint) {
            this.props.setEndPoint(e.target);
            this.setState({
                startPoint: this.state.startPoint,
                endPoint: true,
                wallBuilder: !this.state.wallBuilder
            });
            return true;
        }
        else {
            return false;
        }
    };
    MazeBuilder.prototype.resetMaze = function (nextPropsReset) {
        var mazeSpaces = document.getElementsByClassName('maze-space');
        if (nextPropsReset === 2) {
            for (var i = 0; i < mazeSpaces.length; i++) {
                mazeSpaces[i].className = 'maze-space';
            }
        }
        else {
            for (var i = 0; i < mazeSpaces.length; i++) {
                if (mazeSpaces[i].className === 'maze-space path') {
                    mazeSpaces[i].className = 'maze-space';
                }
            }
        }
    };
    MazeBuilder.prototype.render = function () {
        var rows = this.createRows();
        return (React.createElement("div", { className: 'maze' },
            React.createElement("table", null,
                React.createElement("tbody", { className: 'maze-body' }, rows))));
    };
    return MazeBuilder;
}(React.Component));
exports.MazeBuilder = MazeBuilder;
//# sourceMappingURL=MazeBuilder.js.map