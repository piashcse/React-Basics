import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import {withRouter} from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <div><ListItem button
                           onClick={() => {
                               console.log('ok boss');
                               this.props.history.push('/aboutme')
                           }}
            ><h1>Landing page</h1></ListItem></div>

        )
    }
}

export default withRouter(Landing);