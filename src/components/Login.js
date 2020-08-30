import React, { Component } from "react";
import { render } from "react-dom";
import { Container, InputLabel, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import { Face, Fingerprint, CenterFocusStrong } from '@material-ui/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LoginContainer = styled(Container)({
    background: 'white',
    border: '1px solid black',
    borderRadius: 3,
    width: '70vw',
    padding: '30px'
  });

  const LoginHeader = styled(InputLabel)({
    fontSize: '22pt',
    textAlign: 'center',
    padding: '30px 0px 30px 0px'
  });

class Login extends Component {
  

  constructor(props) {
    super(props);
    this.validateUser = this.validateUser.bind(this);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  validateUser(){
      alert("here");
  }

  render() {

    const ButtonToNavigate = ({ title, history }) => (
      <button
        type="button"
        onClick={this.validateUser}
      >
        {title}
      </button>
    );

    return (
      <Router>
          <LoginHeader>Weclome to the React Survey App</LoginHeader>
          <LoginContainer maxWidth="md">
            <div>
                <Grid container spacing={8} spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Password" type="password" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                        <FormControlLabel control={
                            <Checkbox
                                color="primary"
                            />
                        } label="Remember me" />
                    </Grid>
                    <Grid item>
                        <Button disableFocusRipple disableRipple>Forgot password ?</Button>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Login" />} />
                </Grid>
            </div>
        </LoginContainer>
  </Router>
    );
  }
}

export default Login;