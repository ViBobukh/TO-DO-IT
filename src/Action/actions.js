import actionTypes from "./actionTypes";

export function createAddAction(text){
    return {
        type: actionTypes.ADD,
        text: text
    }
}

export function createDoneAction(id, done){
    return {
        type: actionTypes.DONE,
        id,
        done
    }
}

export function createDeleteAction(id){
    return {
        type: actionTypes.DELETE,
        id: id
    }
}