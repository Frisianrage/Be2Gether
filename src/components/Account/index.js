import React from 'react';

 
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';


const AccountPage = () => (
  
  <AuthUserContext.Consumer>
    
        {authUser => (
            <div>
        <h1>Account: {authUser.first_name} {authUser.last_name}</h1>
        <h4>User</h4>
        <p>User-ID: {authUser.uid}</p>
        <p>Username: {authUser.username}</p>
        <p>Vorname: {authUser.first_name}</p>
        <p>Nachname: {authUser.last_name}</p>
        <p>Alter: {authUser.age}</p>
          <br/>
        <h3>Change your Password</h3>
      
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
  
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);

  /* <PasswordForgetForm /> */