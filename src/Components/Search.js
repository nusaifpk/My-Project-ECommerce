import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Search = ({ searchResult, search }) => {

  return (
    <Container>
      <Row>
        {searchResult.length === 0 ? (
          <Col>
            <h4><center>No products found with the name "{search}".</center></h4>
            
          </Col>
        ) : (
          searchResult.map((product) => (
            <Col lg='4' md='6' sm='12' key={product.id}>
              <div className="product-card">
                <img src={product.imageUrl} alt={product.name} className="imgcard" />
                <h4>{product.name}</h4>
                <h5>{product.category}</h5>
                <p>₹{product.price}/-</p>
                <Link to={`${product.id}`}>
                  <button className="btn-to-view">View Product</button>
                </Link>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Search;
