import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Chats from '../Chat/index';
import Chatwindow from '../Chat/chatwindow'
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Mappage from '../Map/index'
import MyMap from '../Map/MyMap'
import Travel from '../Travel/Travel'
import Travelpage from '../Travel/index'
import { AuthUserContext} from '../Session';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Home from '../Home';
import Memory from '../Travel/memory'



const App = (props) => {
const firebase = props.firebase

  return(
    <Router>
      <AuthUserContext.Consumer> 
          {authUser => 
              <div >
        <Navigation />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        {/* Home - Page */}
        <Route exact path={ROUTES.HOME} render={(props) => (
        <Home {...props} authUser={authUser} isAuthed={true} />)} />

         {/* Account - Page */}
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />

        {/* Admin - Page */}
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />

         {/* Chat - Page */ }
        <Route exact path={ROUTES.CHATS} render={(props) => (
        <Chats {...props} authUser={authUser} isAuthed={true} />)} />
        <Route exact path={ROUTES.CHATWINDOW} component={Chatwindow} />

         {/* Map - Page */}
        <Route exact path={ROUTES.MAP}  render={(props) => (
        <Mappage {...props} authUser={authUser} isAuthed={true} />)} />
        <Route exact path={ROUTES.MAPWINDOW} component={MyMap} />

         {/* Travel - Page */}
        <Route exact path={ROUTES.ALTTRAVEL} render={(props) => (
        <Travel {...props} authUser={authUser} isAuthed={true} />)} />
        <Route exact path={ROUTES.TRAVEL} render={(props) => (
        <Travel {...props} authUser={authUser} isAuthed={true} />)} />
        <Route exact path={ROUTES.TRAVELWINDOW} render={(props) => (
          <Travelpage {...props} authUser={authUser} isAuthed={true} />)} />
         <Route exact path={ROUTES.MEMORY} render={(props) => (
          <Memory {...props} firebase={firebase} authUser={authUser} isAuthed={true} />)} />
         </div>
         }
        </AuthUserContext.Consumer>
    </Router>
  );
} 

export default withAuthentication(App);

// 