import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/xplor.png'
import User from '../Assets/user.png'
import Fav from '../Assets/favourite.png'
import '../Styles/Navbar.css'

function NavScrollExample() {
  return (

    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href='/home'><img src={logo} className='Navlogo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Navitems' href='/home'>HOME</Nav.Link>
            <Nav.Link className='Navitems' href='/mens'>MEN</Nav.Link>
            <Nav.Link className='Navitems' href='/womens'>WOMEN</Nav.Link>
            <Nav.Link className='Navitems' href='/collections'>TRENDING</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="input-search"
              aria-label="Search"
            />
            <Button className='btn-search'>Search</Button>
            <div className='space'>
            <div>
            <Navbar.Brand href='/cart'><img src='https://cdn-icons-png.flaticon.com/128/679/679903.png' className='navIcons'></img></Navbar.Brand>
            <span className='badge'>1</span>
            </div>
            <div>
            <Navbar.Brand href=''><img src={Fav} className='navFavIcons'></img> </Navbar.Brand>
            <span className='badge'>1</span>
            </div>
            <Navbar.Brand href='/registration'><img src={User} className='navIcons'></img></Navbar.Brand>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;