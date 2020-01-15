import React from 'react';
import data from './data';
console.log(data);
function userApp(){
  return(



      <div id= 'users'>
      {
        data.users.map(user => {
          return(
            <div key= {user.name}>
            { user.name }

            </div>)
        })
      }
      </div>



  );
}

export default userApp;
