import React from 'react';
import './App.css';
import Header from './Header.js'
import Done from './Done.js'
import Todo from './Todo.js'
import Add from './Add.js'
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

const App = props => {

    return (
        <div>
            <Header dataSize={props.count} onClear={props.clear}/>
            <div>
                <Add onAdd={props.add}/>
                <Todo onDone={props.done} tasks={props.tasks} onRemove={props.remove}/>
                <Divider variant="middle" />
                <Done onUndo={props.undo} tasks={props.doneTasks} onRemove={props.remove}/>
            </div>

        </div>
    );
}

export default connect(state => {
    return {
        count: state.filter(item => item.status === 0).length,
        tasks: state.filter(item => item.status === 0),
        doneTasks: state.filter(item => item.status === 1)
    }
},dispatch => {
    return {
        add: subject => {
            fetch("http://localhost:8000/tasks", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({subject})
            }).then(res => res.json()).then(json => {
                dispatch({type: 'ADD', task: json});
            });
        },
        remove: id => {
            fetch(`http://localhost:8000/tasks/${id}`, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
            }).then(res => {
                dispatch({ type: 'DEL', id })
            });
        },
        done: id => {
            fetch(`http://localhost:8000/tasks/${id}`, {
                method: 'PATCH',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({status: 1})
            }).then(res => {
                dispatch({ type: 'DONE', id });
            });
        },
        undo: id => {
            fetch(`http://localhost:8000/tasks/${id}`, {
                method: 'PATCH',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({status: 0})
            }).then(res => {
                dispatch({ type: 'UNDO', id })
            });
        },
        clear: () => {
            fetch(`http://localhost:8000/tasks/`, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
            
            }).then(res => {
                dispatch({ type: 'CLEAR' })
            });   
        }
    }
})(App);
