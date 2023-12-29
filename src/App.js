import './App.css';
import {Routes, Route} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Cart from './Components/Cart';
import ProductsDetails from './Components/ProductsDetails';
import Shop from './Components/Shop';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './PageFormat/Footer/Footer';
import { useState } from 'react';


function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    toast.success("Product added successfully");
    console.log("Cart Items:", cartItems);
    setCartItems((prevItems) => [...prevItems, item]);
  };
  

  return (
    <div>

      <Toaster position='top-right' />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductsDetails addToCart={addToCart} />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductsDetails />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='mens/:id' element={<ProductsDetails />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='womens/:id' element={<ProductsDetails />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
