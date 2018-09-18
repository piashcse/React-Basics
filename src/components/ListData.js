import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Satellite';
import SendIcon from '@material-ui/icons/Send';
import {withRouter} from 'react-router-dom'
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

class ListData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'black',
            textColor:'white'
        };
    }

    render() {
        return (
            <div>
                <ListItem button
                          style={{backgroundColor:'yellow'}}
                          onClick={() => {
                              this.props.history.push('/login');
                          }}>
                    <ListItemIcon>
                        <InboxIcon color="primary"
                        />
                    </ListItemIcon>
                    <ListItemText   primary={<Typography type="body2" style={{ color: 'black' }}>Drive Tracking</Typography>}/>
                </ListItem>
                <ListItem button
                          style={styles.item}>
                    <ListItemIcon>
                        <StarIcon
                            color="primary"
                        />
                    </ListItemIcon>
                    <ListItemText   primary={<Typography type="body2" style={{ color: 'white' }}>Drive Tracking</Typography>}/>
                </ListItem>
                <ListItem button
                          style={styles.item}>
                    <ListItemIcon>
                        <SendIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText   primary={<Typography type="body2" style={{ color: 'white' }}>Drive Tracking</Typography>}/>
                </ListItem>
                <ListItem button
                          style={styles.item}>
                    <ListItemIcon>
                        <DraftsIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText   primary={<Typography type="body2" style={{ color: 'white' }}>Drive Tracking</Typography>}/>
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