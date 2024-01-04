import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Cart from './Components/Cart';
import ProductsDetails from './Components/ProductsDetails';
import Products from './UI/ProductsList';
import Shop from './Components/Shop';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './PageFormat/Footer/Footer';
import { createContext, useState } from 'react';
import BillForm from './Components/BillForm';
import AdminHome from './Admin/Components/AdminHome'
import AdminLogin from './Admin/Components/AdminLogin';
import AdminAddProduct from './Admin/Components/AdminAddProduct';
import AdminViewProducts from './Admin/Components/AdminViewProducts';
import AdminEditProduct from './Admin/Components/AdminEditProduct';
import AdminUsers from './Admin/Components/AdminUsers';
import AdminVieworders from './Admin/Components/AdminViewOrders';
import Search from './Components/Search';



export const Data = createContext();

function App() {

  const navigate = useNavigate()

  const [product,setProduct] = useState(Products)
  const [formData,setFormData] = useState([]);
  const [vieworder,setvieworder]=useState([]);
  const [userData, setUserData ]=useState([]);
  const [login, setLogin ]=useState(false); 
  const [loginUser,setLoginUser]=useState([]);

  

  
  const [quantities, setQuantities] = useState({});
  
  // Cart Section
  const [cartItems,setCartItems] = useState([]);

  const addToCart = (product,quantity) => {
    if (!login){
      toast.error("Please log in to add products to the cart"); 
      navigate('/login')
      return;
    }
    // avoid product adding twice
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      toast.error("Product is already in Cart");
      return;
    } 
    else {
      toast.success("Product Added to Cart");
      setCartItems([...cartItems, { ...product}]);
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };



  //Search//
  const [search,setSearch] = useState()
  const [searchResult, setSearchResult] = useState([]); 

  const handleSearch = () => {
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(results);
    navigate('/search');
  };

  // Remove Navbar in Admin Pages
  const removeNavbarFrom = [
    '/admin',
    '/add-product',
    '/viewproduct',
    '/editproduct',
    '/editproduct/:id',
    '/users',
    '/orders',
  ];
  
  const currentPath = window.location.pathname;
  const isAdminpath = removeNavbarFrom.some((path) => currentPath.includes(path));
  

  return (
    <div>
       <Data.Provider value={{product,setProduct,formData,setFormData,vieworder,setvieworder,userData,setUserData,login,setLogin,loginUser,setLoginUser, cartItems,setCartItems, setSearch,quantities,setQuantities}}> 
      
      <Toaster position='top-right' />
      {!isAdminpath && <Navbar  handleSearch={handleSearch}/>}

      <Routes>

        {/* User Section */}

        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductsDetails addToCart={addToCart} />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductsDetails addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path='/billpage' element={<BillForm cartItems={cartItems} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='mens/:id' element={<ProductsDetails addToCart={addToCart} />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='womens/:id' element={<ProductsDetails addToCart={addToCart} />} />
        <Route path="/search" element={<Search searchResult={searchResult} search={search} />} />
        <Route path='/search/:id' element={<ProductsDetails addToCart={addToCart} />} />


        {/* Admin Section */}

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/add-product" element={<AdminAddProduct  />} />
        <Route path="/viewproduct" element={<AdminViewProducts />} />
        <Route path="/editproduct" element={<AdminEditProduct />} />
        <Route path="/editproduct/:id" element={<AdminEditProduct />} />
        <Route path='/users' element={<AdminUsers />} />
        <Route path='/orders' element={<AdminVieworders />} />
      </Routes>

     {!isAdminpath && <Footer />}

      </Data.Provider>
    </div>
  );
}
  
export default App;
