import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "./components/root";

ReactDOM.render(
    <Root compiler="TypeScript" framework="React" />,
    document.getElementById("main")
);
