import React from 'react';
<<<<<<< Updated upstream
import { AuthUserContext, withAuthorization } from '../Session';
import Chats from './Chats'


=======
import { withAuthorization } from '../Session';
import Chats from './Chats'
function Chats(props) {

return (
    <AuthUserContext.Consumer> 
          {authUser => 
                <Userlist firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}
>>>>>>> Stashed changes
function Chatpage(props) {
      return (
            <div>
             {props.authUser && props.authUser.friendwith ?
             <Chats firebase={props.firebase} authUser={props.authUser} />
            :
            <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
        </div> }
<<<<<<< Updated upstream
           </div>
          )
        }
 

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatpage);
=======
            <div>
              <h1>You are not connected to anyone! Please find your Contact and come back!!!</h1>
            </div> }
           </div>
          )
        }
         
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatpage);
  
>>>>>>> Stashed changes
