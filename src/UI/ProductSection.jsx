import React, { useContext } from 'react'
import '../Styles/ProductsCard.css'
import { Col, Container, Row } from 'reactstrap'
import ProductsCard from './ProductsCard'
import { Data } from '../App'

const ProductSection = () => {
  const {product} = useContext(Data)
  return (
    <Container>
      <Row>
        {product.map((product, index) => (
          <Col key={index} lg='4' md='6' sm='12'>
            <ProductsCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductSection

