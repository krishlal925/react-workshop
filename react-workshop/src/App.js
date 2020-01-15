import React from 'react';
import ProductApp from './ProductList';
import UserApp from './UserList';
import CompanyApp from './CompanyList';
import './App.css';

function App() {
  return (
    <div>
      <div >
        <ProductApp/>
      </div>
      <div>
        <UserApp/>
      </div>
      <div>
        <CompanyApp/>
      </div>
    </div>
  );
}

export default App;
