import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import {withRouter} from 'react-router-dom';
import TableData from "./TableData";


class Landing extends Component {
    render() {
        return (
            <div>
            <TableData/>
            </div>

        )
    }
}

export default withRouter(Landing);