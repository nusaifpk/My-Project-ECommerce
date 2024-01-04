import React from 'react'
import'../Styles/ProductsCard.css'
import { Col, Container, Row } from 'reactstrap'
import Products from '../UI/ProductsList'
import { Link } from 'react-router-dom'

const Womens = () => {

  const WomensProduct = Products.filter((product)=> product.category === 'Womens');

  return (
   <section className='womens__products'>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Women's</h2>
        </Col>
        
        {WomensProduct.map((product)=> (
          <Col lg='4' md='6' sm='12'>
            <div className='product-card'>
              <img src={product.imageUrl} alt={product.name} />
              <h4>{product.name}</h4>
              <h5>{product.category}</h5>
              <p>₹{product.price}/-</p>
             <Link to={`/womens/${product.id}`}><button className='btn-to-view'>View Product</button></Link>
            </div>
          </Col>
        ))}
        
      </Row>
    </Container>
   </section>
  )
}

export default Womens