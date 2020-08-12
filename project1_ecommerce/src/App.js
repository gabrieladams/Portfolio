import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { products } from '../src/products/products';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1>This is a react application.</h1>
      {/* <div>
        {products.map((product) => {
          const { productImage } = product;
          return <img src={productImage} alt='' />;
        })}
      </div> */}
    </div>
  );
}

export default App;
