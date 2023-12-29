import React from 'react'
import '../Styles/ProductsCard.css'
import Products from './ProductsList'
import { Col, Container, Row } from 'reactstrap'
import ProductsCard from './ProductsCard'

const ProductSection = () => {
  return (
    <Container>
      <Row>
        {Products.map((product, index) => (
          <Col key={index} lg='4' md='6' sm='12'>
            <ProductsCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductSection

