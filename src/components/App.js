import './App.css';

import Cart from './Cart';
import Modal from './Modal';
import ProductsContainer from './ProductsContainer'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <p>React Shopping Cart</p>
      </header>

      <main className='main'>

        <ProductsContainer />

        <Cart />

      </main>

      <footer className='footer'>
        <p>All right is reserved</p>
      </footer>

      {/* <Modal /> */}

    </div>
  );
}

export default App;
