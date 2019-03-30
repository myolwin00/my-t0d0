import {Component} from "react";
import React from "react";
import Item from "./Item.js";

class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task =>
                        <Item
                            onDone={this.props.onDone}
                            onRemove={this.props.onRemove}
                            key={task.id}
                            task={task}/>)}
                </ul>
            </div>
        );
    }
}

export default Todo;