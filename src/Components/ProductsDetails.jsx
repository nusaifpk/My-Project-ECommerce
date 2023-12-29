import Products from '../UI/ProductsList';
import { useParams } from 'react-router-dom';
import '../Styles/ProductsCard.css'


const ProductsDetails = ({addToCart}) => {
  const { id } = useParams();

  const product = Products.find((p) => p.id === parseInt(id));


  if (!product) {
    return <p>Product not found</p>;
  }

  
  return (
    <div>
    <h3>
      <center>Product Details</center>
    </h3>
    <div className="main-product-view">
      <div className="product-view-card">
        <img src={product.imageUrl} alt={product.name} className="imgcard" />
        <div className="product-details"> 
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <button className="btn-to-Cart" onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductsDetails;
