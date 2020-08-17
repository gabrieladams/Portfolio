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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo
        blanditiis porro reprehenderit! Asperiores nesciunt beatae recusandae
        aliquam eos dolores.
      </p>
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
