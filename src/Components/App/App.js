import ReactDOM from "react-dom";
import React from "react";

import Page from "../Page/Page";
import Container from "../Container/Conteiner";
import "./App.css";

function App () {
    return(
        <>
            <h1 className="App-caption">TO-DO-IT</h1>
            <Page/>
            <Container/>
        </>
    )
}

export default App;