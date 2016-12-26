import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "./components/Root";

ReactDOM.render(
    <Root compiler="TypeScript" framework="React" />,
    document.getElementById("main")
);
