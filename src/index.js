import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./Components/App/App";
import store from "./Store/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);