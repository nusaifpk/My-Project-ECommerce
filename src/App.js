import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Trending from './Components/Trending';
import { Cart } from './Components/Cart';
import Checkout from './Components/Checkout';
import ProductsDetails from './Components/ProductsDetails';
import Shop from './Components/Shop';
import Layout from './PageFormat/Layout/Layout';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/collections' element={<Trending />} />
      </Routes>
      <Layout />
    </div>
  );
}

export default App;
