import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { TextField, FormControl, FormHelperText, Button } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';

import "./index.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        emailError: '',
        passwordError: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange = name => event => {
    this.setState({ [ name ]: event.target.value });
  };

  validate() {
    const { email, password } = this.state
    let isValid = true, errors = { emailError: false, passwordError: false }
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if ( !email ) {
      errors.emailError = 'This field is required'
      isValid = false
    } else if ( !re.test(email) ) {
      errors.emailError = 'Please type valid email address'
      isValid = false
    }

    if ( !password ) {
      errors.passwordError = 'This field is required'
      isValid = false
    } else if ( password === '111' ) {
      errors.passwordError = 'Not allowed password, please change it'
      isValid = false
    } else if ( password.length < 10 ) {
      errors.passwordError = 'Password must be at least 10 characters long.'
      isValid = false
    }

    this.setState({ errors })

    isValid && this.props.actions.signUpUser({ email, password })
  }

  render() {
    const { email, password, errors: { emailError, passwordError } } = this.state
    return (
      <Container fluid className="px-0">
        <p className="formTitle">Create account</p>
        <form className="signUpFormsContainer" autoComplete="off">
          <FormControl error={!!emailError}>
            <TextField
              id="signUpEmail"
              className="inputField mr-2"
              label="Email address"
              value={email}
              onChange={this.handleChange('email')}
              margin="normal"
              variant="outlined"
              error={!!emailError}
            />
            <FormHelperText>{emailError}</FormHelperText>
          </FormControl>
          <FormControl error={!!passwordError}>
            <TextField
              id="signUpPassword"
              className="inputField ml-2"
              label="Password"
              value={password}
              onChange={this.handleChange('password')}
              margin="normal"
              variant="outlined"
              type="password"
              error={!!passwordError}
            />
            <FormHelperText className="ml-2 mt-0">{passwordError}</FormHelperText>
          </FormControl>
        </form>
        <div className="d-flex justify-content-end">
          <Button onClick={this.validate} className="submitButton">Sign Up <ArrowForward className="ml-4"/></Button>
        </div>
      </Container>
    )
  }
}
