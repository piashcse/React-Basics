import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const apiBaseUrl = "http://localhost:3000/";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentWillMount() {
        // console.log("willmount prop values",this.props);
    }


    handleClick(event) {
        let payload = {
            "email": this.state.email,
            "password": this.state.password,
            "Content-Type": 'application/json'
        }
        axios.post(apiBaseUrl + 'user/login', payload)
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    console.log("Login successfull" + response.data.token);
                    localStorage.setItem('token', response.data.token);
                }
                else if (response.status == 204) {
                    console.log("Username password do not match");
                    alert(response.data.success)
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }

    render() {
        const  authenticated = this.isAuthenticated()
        console.log(authenticated,'jj')
        return (
            <div>
                {authenticated ? <Redirect to={{pathname: '/login'}}/> :
                    <div align="center">
                        <MuiThemeProvider>
                            <div>
                                <TextField
                                    hintText="Enter email"
                                    floatingLabelText="Email"
                                    style={{primary: 'red'}}
                                    onChange={(event, newValue) => this.setState({email: newValue})}
                                />
                                <br/>
                                <TextField
                                    type="password"
                                    hintText="Enter your Password"
                                    floatingLabelText="Password"
                                    onChange={(event, newValue) => this.setState({password: newValue})}
                                />
                                <br/>
                                <RaisedButton label="Submit" primary={true} style={style}
                                              onClick={(event) => this.handleClick(event)}/>
                            </div>
                        </MuiThemeProvider>
                    </div>}
            </div>

        );
    }
}

const style = {
    margin: 15,
};

export default Login;