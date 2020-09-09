import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Col, Row, ButtonGroup, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

 
const SignInPage = (props) => (
  <div>
    <SignInForm setShowSignUp={props.setShowSignUp} />
    
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.ShowSignUp = props.setShowSignUp
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });

  event.preventDefault();
};
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = props => {
    console.log(this.ShowSignUp(true))
  }
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <div className="signin-line">
          <form onSubmit={this.onSubmit}>
            <Row>
              <div className="signin-input-div">
              <Col>
                <input className="signin-input" name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" /> 
              </Col>
              </div>
              <div className="signin-input-div">
              <Col>
                <input className="signin-input" name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
              </Col>
              </div>
              
              <Col>
              <div className="signin-btn">
              <Dropdown  as={ButtonGroup}>
                <Button size="lg" disabled={isInvalid} type="submit" variant="secondary">Sign In</Button>

                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item className="dropdownitem" href="../PasswordForget/index">Forgot Password?</Dropdown.Item>
                  <Dropdown.Item className="dropdownitem"><Link to={ROUTES.SIGN_UP} >Sign Up</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
              
                
              </Col>
            </Row>
            {error && <p>{error.message}</p>}
          </form>
      </div>
             
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };

//<button disabled={isInvalid} type="submit">Sign In</button>