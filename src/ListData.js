import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import {withRouter} from 'react-router-dom'
import {withStyles} from "@material-ui/core";

class ListData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ListItem button
                          style={styles.item}
                          onClick={() => {
                              this.props.history.push('/aboutme');
                          }}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" style={styles.textColor}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Send mail"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItem>
            </div>
        )
    }

}

export default withRouter(withStyles(styles)(ListData));

const styles = {
    item:{
        backgroundColor:'black'
    },
    textColor:{
        color: 'white'
    }
}