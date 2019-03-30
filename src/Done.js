import {Component} from "react";
import React from "react";
import Item from "./Item.js";

class Done extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task =>
                        <Item
                            onUndo={this.props.onUndo}
                            onRemove={this.props.onRemove}
                            checked={task.status === 1}
                            key={task.id}
                            task={task}/>)}
                </ul>
            </div>
        );
    }
}

export default Done;