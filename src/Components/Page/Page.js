import ReactDOM from "react-dom";
import React, {useState} from "react";
import {connect} from "react-redux";

import {createAddAction} from "../../Action/actions";
import "./Page.css";

function Page ({createAddAction}) {
    const [value, changeValue] = useState(" ");
    const handler = (event) => {
        changeValue(event.target.value)
    }
    return (
        <div className="Page">
            <input className="Page-input" value={value} onChange={handler} />
            <button className="Page-button" onClick={() => {createAddAction(value)}}>Add</button>
        </div>
    )
}

const mapDispatchToProps = {
    createAddAction
}

export default connect(
    null,
    mapDispatchToProps
)(Page);