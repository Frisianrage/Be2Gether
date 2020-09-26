import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import SignInPage from '../SignIn/index'
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';
import SignUpForm from '../SignUp'
<<<<<<< Updated upstream
import {Navbar} from 'react-bootstrap'
=======
>>>>>>> Stashed changes

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
        <NavigationAuth authUser={authUser} /> ) : ( <NavigationNonAuth /> )
      }
    </AuthUserContext.Consumer>
  </div>
);


const NavigationAuth = ({ authUser }) => (
<<<<<<< Updated upstream

<Navbar className="mynavbar">
  <Navbar.Brand className="nav-item">Be2Gether</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="nav-item">
      <Link to={ROUTES.LANDING} className="nav-item">Landing</Link>
      <Link to={ROUTES.HOME} className="nav-item">Home</Link>
      <Link to={ROUTES.ACCOUNT} className="nav-item">Account</Link>
      <Link to={ROUTES.CHATS} className="nav-item">Chat</Link>
      <Link to={ROUTES.MAP} className="nav-item">Map</Link>
      <Link to={ROUTES.TRAVELWINDOW} className="nav-item">Travel-Blog</Link>
=======
  <ul className="Navbar">
    <li >
      <Link to={ROUTES.LANDING} className="nav-item">Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME} className="nav-item">Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT} className="nav-item">Account</Link>
    </li>
    <li>
      <Link to={ROUTES.CHATS} className="nav-item">Chat</Link>
    </li>
    <li>
      <Link to={ROUTES.MAP} className="nav-item">Map</Link>
    </li>
    <li>
      <Link to={ROUTES.TRAVELWINDOW} className="nav-item">Travel-Blog</Link>
    </li>
    <li>
      <Link to={ROUTES.MAP}>Map</Link>
    </li>
    <li>
      <Link to={ROUTES.TRAVELWINDOW}>Travel-Blog</Link>
    </li>
>>>>>>> Stashed changes
    {!!authUser.roles[ROLES.ADMIN] && (
        <Link to={ROUTES.ADMIN}>Admin</Link>
    )}
<<<<<<< Updated upstream
=======
    
    <li>
>>>>>>> Stashed changes
      <SignOutButton />
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
 
);

const NavigationNonAuth = () => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
  <div className="landing-navbar">
    
<<<<<<< Updated upstream
     <Link to={ROUTES.LANDING} className="landing-nav-item">Be2Gether</Link>
=======
     <Link to={ROUTES.LANDING} className="landing-nav-item">Be2Gether-Logo</Link>
>>>>>>> Stashed changes
    
     <SignInPage setShowSignUp={setShowSignUp} />
    { showSignUp && <SignUpForm setShowSignUp={setShowSignUp} />}
  </div>
  
);
  }
 
export default Navigation;

// <Link to={ROUTES.SIGN_IN} className="nav-item">Sign In</Link>