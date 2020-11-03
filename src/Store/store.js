import {createStore} from "redux";

import {state, reducer} from "../Reducers/reducer";

const store = createStore(reducer, state);

export default store;