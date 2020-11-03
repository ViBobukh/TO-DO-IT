import ReactDOM from "react-dom";
import React from "react";
import {connect} from "react-redux";

import Item from "./Item/Item";
import {createDeleteAction, createDoneAction} from "../../Action/actions";

function Container ({items, createDeleteAction, createDoneAction}) {
    return (
        <>
            {
                items.map(({id, text, done, dateStart, dateDone}) => <Item
                    createDoneAction={createDoneAction}
                    createDeleteAction={createDeleteAction}
                    text={text}
                    key={id}
                    itemId={id}
                    done={done}
                    dateStart={dateStart}
                    dateDone={dateDone}
                />)
            }
        </>
    )
}

const mapStateToProps = ({items}) => ({
    items
})

const mapDispatchToProps = {
    createDeleteAction,
    createDoneAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);