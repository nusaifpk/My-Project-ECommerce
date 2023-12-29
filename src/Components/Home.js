import React from 'react'
import '../Styles/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from 'framer-motion'
import {Container , Row,Col} from 'reactstrap';
import {useNavigate} from 'react-router-dom'

import Services from './Services/Services'
import ProductSection from '../UI/ProductSection';

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
              <h2 className='section__title'>Trending Now</h2>
            </Col>
            <ProductSection />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <h1 className='shopping__for'>Shopping For ?</h1>
            <a href='mens'><img src='https://s7ap1.scene7.com/is/image/adityabirlafashion/RBK_D_New%20shop%20for%20men?resMode=sharp2&wid=1300&hei=400' className="bar__img" alt='men' /></a>
            <a href='womens'><img src='https://s7ap1.scene7.com/is/image/adityabirlafashion/RBK_D_New%20shop%20for%20women?resMode=sharp2&wid=1300&hei=400' className="bar__img" alt='women' /></a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
   
  )
}

export default Home