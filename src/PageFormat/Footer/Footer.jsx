import React from 'react'
import '../../Styles/Footer.css'
import { Container, Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/xplor.png'
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <Navbar.Brand href='/home'><img src={logo} className='Navlogo'></img></Navbar.Brand>
          <p className="footer__text" mt-4> 
          At XPLOR, we believe that the perfect pair of shoes can elevate your style, boost your confidence, and carry you through every step of your journey. Step into a world of unparalleled fashion and comfort as we present our curated collection of exquisite footwear for men, women, and children.
          </p>
          </Col>
          
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='mens' className='link' title='Go to Men Page'>Men</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='womens' className='link' title='Go to Women Page'>Women</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='shop' className='link' title='Go to Shop Page'>All</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          
          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='home' className='link' title='Go to Home Page'>Home</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='shop' className='link' title='Go to Shop Page'>Shop</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='cart' className='link' title='Go to Cart Page'>Cart</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>1st Floor, Tirur Road, Alathyoor</p>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span><i class="ri-phone-line"></i></span>
                  <p>+919497630421</p>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-fill"></i></span>
                  <p>xplorshoes@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">© {year} XPLOR, All right reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer