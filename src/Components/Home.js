import React from 'react'
import {motion} from 'framer-motion'
import '../Styles/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container , Row,Col} from 'reactstrap';
import {useNavigate} from 'react-router-dom'
import Services from './Services/Services';

const Home = () => {
  const setNavigate = useNavigate();

  const year = new Date().getFullYear();

  return (
    <>
      <section className='hero__section'> 
        <Container>
          <Row>
            <Col lg='6' md='5'>
              <div className='hero__content'>
                <p className='hero__subtitle'>Trending Product in {year}</p>
                <h2>Make Your LifeStyle Awesome</h2>
                <p>"Step into style and comfort with our latest collection of trendsetting footwear – where every step is a statement"</p>
                <motion.button whileHover={{scale:1.1}} className='buy__btn' onClick={() => setNavigate('/shop')}>SHOP NOW</motion.button>
              </div>
            </Col>
            <Col lg='6' md="6" >
              <div className='hero__img'>
                <img className='imgimg' src='https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
   
  )
}

export default Home