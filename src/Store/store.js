import {createStore} from "redux";

import {state, reducer} from "../Reducers/reducer";

const store = createStore(reducer, state);

store.subscribe(()=> {
    localStorage.setItem("items" , JSON.stringify(store.getState().items));
})

export default store;