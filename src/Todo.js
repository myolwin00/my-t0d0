import {Component} from "react";
import React from "react";
import Item from "./Item.js";

import List from '@material-ui/core/List';

class Todo extends Component {
    render() {
        return (
            <List>
                {
                    this.props.tasks.map(task =>
                    <Item
                        onDone={this.props.onDone}
                        onRemove={this.props.onRemove}
                        key={task._id}
                        task={task}/>)}

            </List>
        );
    }
}

export default Todo;