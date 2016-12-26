"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var root_1 = require("./components/root");
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement(root_1.Root, { compiler: "TypeScript", framwork: "React" }), document.getElementById('main'));
});
//# sourceMappingURL=index.js.map
