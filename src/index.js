import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux'
import DiaryApp from "./components/DiaryApp/DiaryApp";
import todoApp from './reducers'
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store} >
        <DiaryApp />
    </Provider>,
    document.getElementById('root')
);
