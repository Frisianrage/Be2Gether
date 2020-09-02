import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MapUserlist from './mapuserlist'

function Map(props) {
return (
    <AuthUserContext.Consumer> 
          {authUser => 
                <MapUserlist firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Map);