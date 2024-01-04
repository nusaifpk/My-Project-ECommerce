import React, { useContext, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Data } from '../../App';
import toast from 'react-hot-toast';

const AdminEditProduct = () => {

    const { id } = useParams();
    const nameRef = useRef(null)
    const categoryRef = useRef(null)
    const imageUrlRef = useRef(null)
    const priceRef = useRef(null)

    const {product,setProduct} = useContext(Data)
    const findvalue = product.find((item) => item.id === parseInt(id));

    const [formData,setFormData] = useState({
        name:findvalue.name,
        category:findvalue.category,
        imageUrl:findvalue.imageUrl,
        price:findvalue.price

        
    });

    const handleSave = () => {
        const updateName = nameRef.current.value;
        const updateCategory = categoryRef.current.value;
        const updateImage = imageUrlRef.current.value;
        const updatePrice = priceRef.current.value;
    

    if (!updateName.trim() || !updateCategory.trim() || !updateImage.trim() || !updatePrice.trim() ){
        toast.error("Please fill in all fields")
        return;
    }

    setFormData({
        name:updateName,
        category:updateCategory,
        imageUrl:updateImage,
        price:updatePrice
    })

    const updateProduct = product.map((item) =>
      item.id === parseInt(id)
      ?{  
        ...item,
        name: updateName,
        category: updateCategory,
        imageUrl : updateImage,
        price: updatePrice,
      }
    : item
    );

    setProduct(updateProduct);
    toast.success("Product Updated Successfully..")
};


  return (
    <div style={{ width: '100%', height: '40vh' }}>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <b>Name</b>
          </th>
          <th scope="col">
            <b> Category</b>
          </th>
          <th scope="col">
            <b> ImageUrl</b>
          </th>
          <th scope="col">
            <b> Price</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr key={findvalue.id}>
          <td>
            {' '}
            <input
              type="text"
              ref={nameRef}
              defaultValue={formData.name}
            />{' '}
          </td>
          <td>
            {' '}
            <input
              type="text"
              ref={categoryRef}
              defaultValue={formData.category}
            />{' '}
          </td>
          <td>
            {' '}
            <input
              type="text"
              ref={imageUrlRef}
              defaultValue={formData.imageUrl}
            />{' '}
          </td>
          <td>
            {' '}
            <input
              type="number"
              ref={priceRef}
              defaultValue={formData.price}
            />
            {' '}
          </td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      className="btn btn-success m-2 mt-5"
      onClick={handleSave}>Save</button>
      <Link to='/viewproduct'><button type="button" className="btn btn-danger m-2 mt-5">Exit</button></Link>
  </div>
  )
}

export default AdminEditProduct