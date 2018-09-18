import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
var apiBaseUrl = "http://localhost:4000/api/";
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }
    componentWillMount(){
        // console.log("willmount prop values",this.props);
    }
    handleClick(event){
        var self = this;
        var payload={
            "userid":this.state.username,
            "password":this.state.password,
            "role":this.state.loginRole
        }
        /*axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Login successfull");
                   /!* var uploadScreen=[];
                    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})*!/
                }
                else if(response.data.code == 204){
                    console.log("Username password do not match");
                    alert(response.data.success)
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    render() {
        return (
            <div align="center">
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter user name"
                            floatingLabelText="User name"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;