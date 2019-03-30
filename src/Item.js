import {Component} from "react";
import React from "react";

class Item extends Component {
    item = this.props.task;

    render() {

        return (
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={() => {
                    this.onCheckChanged(this.props.checked)
                }}/>
                {this.item.subject}
                <a href="#" onClick={() => {
                    this.props.onRemove(this.item.id);
                }}>&times;</a>
            </li>
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