import React from 'react';
import { withAuthorization } from '../Session';
import Country from './Countrypage'
import AltCountry from './AltCountrypage'

const Travel = (props) => {
  const hash = props.history.location.hash
  const search = props.history.location.search
  const newerId = "Hy5UQEqX1FNhYsverbOyzQUVep5H"

   return (
          <div>
            { hash ? <Country firebase={props.firebase} hash={hash} newerId={newerId} /> : <AltCountry firebase={props.firebase} search={search} newerId={newerId} />}
          </div>
          );
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Travel);