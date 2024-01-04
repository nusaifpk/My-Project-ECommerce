import React from 'react'
import 'reactstrap'
import {motion} from 'framer-motion'
import { Container ,Row,Col } from 'reactstrap'
import '../Services/Services.css'
import 'remixicon/fonts/remixicon.css'

import ServiceData from '../../Data/ServiceData';

const Services = () => {
  return (
    <section className='services'>
      <Container>
        <Row>
          {ServiceData.map((item,index)=> (
              <Col lg='3' md='4' key={index}>
                <motion.div whileHover={{scale:1.1}} className='service__item' style={{background : `${item.bg}`}}>
                  <span><i class={item.icon}></i></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col> )) 
              }
        </Row>
      </Container>
    </section>
  )
}

export default Services