import React from 'react'
import'../Styles/ProductsCard.css'
import { Container,Row,Col } from 'reactstrap'
import Products from '../UI/ProductsList'
import { Link } from 'react-router-dom'

const Mens = () => {

  const MensProducts = Products.filter((product)=> product.category === 'Mens')

  return (
    <section className='mens__products'>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Men's</h2>
        </Col>
        {MensProducts.map((product)=> (
          <Col key={product.id} lg='4' md='6' sm='12'>
            <div className='product-card'>
              <img src={product.imageUrl} alt={product.name} />
              <h4>{product.name}</h4>
              <h5>{product.category}</h5>
              <p>{product.price}</p>   
              <Link to={`/mens/${product.id}`}><button className='btn-to-view'>View Product</button></Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
    
  )
}

export default Mens