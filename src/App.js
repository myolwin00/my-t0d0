import React, {Component} from 'react';
import './App.css';
import Header from './Header.js'
import Done from './Done.js'
import Todo from './Todo.js'
import Add from './Add.js'
import Divider from '@material-ui/core/Divider';

class App extends Component {

    autoId = 4;
    state = {
        tasks: [
            {id: 1, subject: "Milk", status: 0},
            {id: 2, subject: "Bread", status: 1},
            {id: 3, subject: "Apple", status: 0},
            {id: 4, subject: "Butter", status: 1}

        ]
    };

    render() {
        let todo = this.state.tasks.filter(task => task.status === 0);
        let done = this.state.tasks.filter(task => task.status === 1);
        return (
            <div>
                <Header dataSize={todo.length} onClear={this.clear}/>
                <div>
                    <Add onAdd={this.add}/>
                    <Todo onDone={this.done} tasks={todo} onRemove={this.remove}/>
                    <Divider variant="middle" />
                    <Done onUndo={this.undo} tasks={done} onRemove={this.remove}/>
                </div>

            </div>
        );
    }

    add = (subject) => {
        let newTask = {
            id: ++this.autoId,
            subject: subject,
            status: 0
        };
        this.setState({tasks: [...this.state.tasks, newTask]})
    };

    remove = (id) => {
        this.setState({tasks: this.state.tasks.filter(task => task.id !== id)})
    };

    done = (id) => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if (item.id === id) item.status = 1;
                return item;
            })
        })
    };

    undo = (id) => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if (item.id === id) item.status = 0;
                return item;
            })
        })
    };

    clear = () => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.status === 0)
        })
    }
}


export default App;
