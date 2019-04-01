import {Component} from "react";
import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

import DeleteIcon from '@material-ui/icons/Delete';

class Item extends Component {
    item = this.props.task;

    render() {

        return (
            <ListItem>
                <Checkbox checked={this.props.checked} onChange={() => {
                    this.onCheckChanged(this.props.checked)
                }} />
                <ListItemText primary={this.item.subject}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => {
                        this.props.onRemove(this.item.id);
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    onCheckChanged = (isChecked) => {
        if (isChecked) {
            this.props.onUndo(this.item.id);
        } else {
            this.props.onDone(this.item.id);
        }
    }
}

export default Item;