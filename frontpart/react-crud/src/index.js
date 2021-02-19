import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <app />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();