import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import NoPic from '../../Pics/NoPic.png';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import {Button, InputGroup, FormControl} from 'react-bootstrap'

 
const SignUpPage = (props) => (
  <div className="signuppage">
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
    id:"",
    friendwith:"",
    lastLogin:""
  };
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }
 
  onSubmit = event => {
    const { username, first_name, last_name, age, email, passwordOne, isAdmin } = this.state;
    const roles = {};
    
 
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
<<<<<<< Updated upstream
=======
            avatar: NoPic,
>>>>>>> Stashed changes
            username,            
            first_name,
            last_name,
            age,
            email,
            roles,
            isAdmin: false,
            id: authUser.user.uid,
            friendwith: "",
            lastLogin: new Date()
            
          },);
      })
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
 
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

 
  render() {
    const {
      username,
      first_name,
      last_name,
      age,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
 
    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <InputGroup size="lg">
    
          <FormControl placeholder="Username"  name="username"
            value={username}
            onChange={this.onChange}
            type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
          <FormControl name="first_name"
            value={first_name}
            onChange={this.onChange}
            type="text"
            placeholder="First Name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <FormControl name="last_name"
            value={last_name}
            onChange={this.onChange}
            type="text"
            placeholder="Last Name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <FormControl name="age"
            value={age}
            onChange={this.onChange}
            type="number"
            placeholder="Age" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <FormControl name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <FormControl aria-label="Small" name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"aria-describedby="inputGroup-sizing-sm" />
          <FormControl name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <br />
        <Button variant="secondary" disabled={isInvalid} size="lg" type="submit">Sign Up</Button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
      
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };
/*
<label>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label> */