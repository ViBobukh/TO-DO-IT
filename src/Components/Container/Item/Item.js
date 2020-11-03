import ReactDOM from "react-dom";
import React from "react";
import classNames from "classnames";

import "./Item.css";

function Item ({text, itemId, done, createDeleteAction, createDoneAction, dateDone, dateStart}) {
    return (
        <div className={classNames("Item", {"Item-backgroundDone": done})}>
            <div className="Item-checkbox">
                <input type="checkbox" defaultChecked={done} onClick={()=> createDoneAction(itemId, !done)}/>
                {done ? <div className="Item-infoAboutDone">{dateDone}
                </div> : null }
            </div>
            <p className="Item-text">{text}</p>
            <p className="Item-dateStart">{dateStart}</p>
            <button className="Item-button" onClick={()=>{createDeleteAction(itemId)}}>x</button>
        </div>
    )
}

export default Item;