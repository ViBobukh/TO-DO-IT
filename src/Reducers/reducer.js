import shortid from "shortid";

import actionTypes from "../Action/actionTypes";

export const state = {
    items: []
}

function createObj(text) {
    return {
        text,
        id: shortid(),
        done: false,
        dateStart: (new Date()).toUTCString()
    }
}

export function reducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    createObj(action.text)
                ]
            }
        case actionTypes.DONE:
            return {
                ...state,
                items:
                    state.items.map((item) => {
                        return item.id !== action.id ? item :
                            {
                                text: item.text,
                                id: action.id,
                                done: action.done,
                                dateStart: item.dateStart,
                                dateDone: (new Date()).toUTCString()
                            }
                    })
            }
        case actionTypes.DELETE:
            return {
                ...state,
                items: state.items.filter((item) => {
                    return item.id !== action.id;
                })
            }
        default:
            break
    }
    return state;
}