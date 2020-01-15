import React from 'react';
import data from './data';
console.log(data);
function userApp(){
  return(



      <div id= 'users'>
      {
        data.users.map(user => {
          return(
            <div class = "card" key= {user.id}>
            { user.name }

            </div>)
        })
      }
      </div>



  );
}

export default userApp;
