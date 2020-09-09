import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Mapwindow from './mapwindow'

function MyMap(props) {
      console.log(props)
return (
    <AuthUserContext.Consumer> 
          {authUser => 
                <Mapwindow firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(MyMap);