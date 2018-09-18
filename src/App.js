import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListData from './components/ListData';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/PowerSettingsNew';
import {withRouter} from 'react-router-dom';
import Main from "./components/Main";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import RaisedButton from "material-ui/RaisedButton";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    topbar: {
        background: '#161616',
        justifyContent: 'space-between',
        justifyItems: 'center'
    }
});

class App extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        open: false,
    };

    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar className={classes.topbar}>

                            <Typography variant="title" color="inherit" noWrap>
                                Grand Limonious
                            </Typography>
                            <Button color="primary" style={{backgroundColor:'white', }}>
                                Logout
                            </Button>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List><ListData/></List>
                    <Divider/>
                    <List>
                        <ListItem button
                                  onClick={() => {
                                      //this.props.history.push('/aboutme')
                                      this.handleClickOpen();
                                  }}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="LogOut"/>
                        </ListItem></List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Main/>
                    {this.alertDialog()}
                </main>
            </div>
        );
    }

    alertDialog(){
        return(
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you want to log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        NO
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        localStorage.removeItem('token')
    };
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(App));
