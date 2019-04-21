import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore((state=[], action) => {
    switch(action.type) {
        case 'ADD': return [action.task, ...state];    
        case 'SET': return action.tasks;
        case 'DEL': {
            return state.filter(task => task._id !== action.id);
        }
        case 'DONE': return state.map(task => {
            if(task._id === action.id) task.status = 1;
            return task;
        });
        case 'UNDO': return state.map(task => {
            if(task._id === action.id) task.status = 0;
            return task;
        });
        case 'CLEAR': return state.filter(item => item.status === 0);
        default: return state;
    }
});

fetch("http://localhost:8000/tasks").then(res =>  {
    return res.json();
}).then(json => {
    store.dispatch({'type': 'SET', 'tasks': json});
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();