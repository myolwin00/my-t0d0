import {Component} from "react";
import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = {
    bar: {
        marginBottom: 20
    },
    title: {
        marginLeft: 20,
        flexGrow: 1
    }
};

class Header extends Component {
    state = {
        anchorEl: null,
        open: false
    };

    menuClose = () => {
        this.setState({
            anchorEl: null,
            open: false
        })
    };

    menuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            open: true
        })
    };

    render() {
        let anchorEl = this.state.anchorEl;
        return (
            <AppBar style={styles.bar} position="static">
                <Toolbar>
                    <Badge color="secondary" badgeContent={this.props.dataSize}><DoneAllIcon/></Badge>
                    <Typography style={styles.title} variant="h6" color="inherit">
                        TODO List
                    </Typography>
                    <ClickAwayListener onClickAway={this.menuClose}>
                        <IconButton color="inherit" onClick={this.menuOpen}>
                            <MoreVertIcon/>
                        </IconButton>
                    </ClickAwayListener>
                    <Menu anchorEl={anchorEl}
                          open={this.state.open}>
                        <MenuItem onClick={() => {
                            this.props.onClear();
                            this.menuClose();
                        }}>Clear All Done
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;