import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css"


function Root() {
    return (
        <div>
            <App />
        </div>
    )
}


ReactDOM.render(<Root />, document.getElementById("root"))