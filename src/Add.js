import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from "@material-ui/core/Paper/Paper";

import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'

const styles = {
    input: {
        flexGrow: 1
    },
    container: {
        margin: 10, padding: 10, display: "flex"
    }
};

class Add extends Component {
    input = React.createRef();
    render() {
        return (
            <div>
                <Paper elevation={2} style={styles.container}>
                    <InputBase placeholder={"New Task"} inputRef={this.input} style={styles.input} variant={"outlined"} fullWidth />
                    <IconButton onClick={() => {
                        let subject = this.input.current.value;
                        this.props.onAdd(subject);
                    }}>
                        <PlayListAddIcon/>
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default Add;