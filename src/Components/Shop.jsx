import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductSection from '../UI/ProductSection'


const Shop =() => {
  return (
    <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>EXPLORE YOUR STYLE HERE</h2>
            </Col>
            <ProductSection />
          </Row>
        </Container>
      </section>
  )
}

export default Shop