import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Data } from '../../App';
import toast from 'react-hot-toast';
import SideBar from './AdminSideBar';

const AdminAddProduct = ({}) => {

    let id= 20;
    const setNavigate = useNavigate();

    const {product,setProduct} = useContext(Data);
    const nameRef = useRef(null);
    const categoryRef = useRef(null);
    const quantityRef = useRef(null);
    const imageUrlRef = useRef(null);
    const priceRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPrice = parseFloat(priceRef.current.value);
        const quantity = parseFloat(quantityRef.current.value);

        if(isNaN(newPrice) ||  isNaN(quantity)){
            toast.error("Invalid quantity or price")
            return;
        }

        const newProduct = {
            id:id + 1,
            name:nameRef.current.value,
            imageUrl:imageUrlRef.current.value,
            category:categoryRef.current.value,
            price:priceRef.current.value
        }
        
        setProduct((prevProducts) => [...prevProducts, newProduct]);
        toast.success('Product Added Successfully...')
        setNavigate('/viewproduct')
    };
    console.log(product);



  return (
    <div className='d-flex'>

<div>
  <SideBar />
</div>




<div className="container mt-5">
      <div className="card">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0">Add a Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label"> Name: </label>
              <input type="text" id="title" ref={nameRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label"> Price: </label>
              <input type="number" id="price" ref={priceRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label"> Image URL: </label>
              <input type="text" id="imageUrl" ref={imageUrlRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label"> Category: </label>
              <input type="text" id="category" ref={categoryRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label"> Qty: </label>
              <input type="number" id="quantity" ref={quantityRef} className="form-control" required />
            </div>

            <button type="submit" className="btn btn-success">Add Product</button>
          </form>
        </div>
      </div>
    </div>




</div>
  )
}

export default AdminAddProduct