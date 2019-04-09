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
        add: subject => dispatch({ type: 'ADD', subject }),
        remove: id => dispatch({ type: 'DEL', id }),
        done: id => dispatch({ type: 'DONE', id }),
        undo: id => dispatch({ type: 'UNDO', id }),
        clear: () => dispatch({ type: 'CLEAR' })
    }
})(App);
