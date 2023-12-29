import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/xplor.png'
import User from '../Assets/user.png'
import '../Styles/Navbar.css'
import { useState } from 'react';

function NavMainBar() {

  const [search,setSearch] = useState('');

  const handleSearch = () => {
    console.log("Searching for " + search)
  }


  return (

    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href='/'><img src={logo} className='Navlogo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Navitems' href='/' title='Go to Home Page'>HOME</Nav.Link>
            <Nav.Link className='Navitems' href='/mens' title='Go to Men Page'>MEN</Nav.Link>
            <Nav.Link className='Navitems' href='/womens' title='Go to Women Page'>WOMEN</Nav.Link>
            <Nav.Link className='Navitems' href='/shop' title='Go to Shop Page'>SHOP</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search your product..."
              className="input-search"
              aria-label="Search"
              title='Click to Type'
              onChange={(e) => setSearch(e.target.value)} 
            />
            <Button className='btn-search' title='Click to Search' onClick={handleSearch}>Search</Button>
            <div className='space'>
            <div>
            <Navbar.Brand href='/cart'><img src='https://cdn-icons-png.flaticon.com/128/8401/8401528.png' className='navIcons' title='Go to Cart Page'></img></Navbar.Brand>
            </div>
            <div>
            <Navbar.Brand href='/registration'><img src={User} className='navIcons' title='Go to Profile Page'></img></Navbar.Brand>
            </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMainBar;