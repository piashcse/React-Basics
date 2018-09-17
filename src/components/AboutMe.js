import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class AboutMe extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.props.history.push('/')
                    }}
                ><h1>About me</h1></button>
            </div>
        )
    }
}

export default withRouter(AboutMe);