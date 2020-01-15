import React from 'react';
import data from './data';
console.log(data);
function companyApp(){
  return(


      <div id= 'companies'>
      {
        data.companies.map(company => {
          return(
            <div key= {company.id}>
            { company.name }
            <br/>
            in {company.state}
            </div>)
        })
      }
      </div>



  );
}

export default companyApp;
