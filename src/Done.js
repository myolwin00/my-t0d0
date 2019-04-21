import {Component} from "react";
import React from "react";
import Item from "./Item.js";

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

class Done extends Component {
    subHeader = <ListSubheader>Done</ListSubheader>;
    render() {
        return (
            <List subheader={this.subHeader}>
                {this.props.tasks.map(task =>
                    <Item
                        onUndo={this.props.onUndo}
                        onRemove={this.props.onRemove}
                        checked={task.status === 1}
                        key={task._id}
                        task={task}/>)}
            </List>
        );
    }
}

export default Done;