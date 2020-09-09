import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import SignInPage from '../SignIn/index'
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';
import SignUpForm from '../SignUp'

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
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
  <div className="landing-navbar">
    
     <Link to={ROUTES.LANDING} className="landing-nav-item">Be2Gether-Logo</Link>
    
     <SignInPage setShowSignUp={setShowSignUp} />
    { showSignUp && <SignUpForm setShowSignUp={setShowSignUp} />}
  </div>
  
);
  }
 
export default Navigation;

// <Link to={ROUTES.SIGN_IN} className="nav-item">Sign In</Link>