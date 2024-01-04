import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../App';
import logo from '../Assets/xplor.png';
import User from '../Assets/user.png';
import toast from 'react-hot-toast';
import '../Styles/Navbar.css';

const NavBar = ({ handleSearch }) => {
  const { loginUser, setLogin, setSearch } = useContext(Data);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(false);
    toast.success('Logged out Successfully');
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} className='Navlogo' alt='' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className='Navitems' title='Go to Home Page'>
              <Link to='/' className='link__navitems'>
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link className='Navitems' title='Go to Men Page'>
              <Link to='/mens' className='link__navitems'>
                MEN
              </Link>
            </Nav.Link>
            <Nav.Link className='Navitems' title='Go to Women Page'>
              <Link to='/womens' className='link__navitems'>
                WOMEN
              </Link>
            </Nav.Link>
            <Nav.Link className='Navitems' title='Go to Shop Page'>
              <Link to='/shop' className='link__navitems'>
                SHOP
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
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
                <Navbar.Brand>
                  <Link to='/cart'>
                    <img src='https://cdn-icons-png.flaticon.com/128/8401/8401528.png' className='navIcons' title='Go to Cart Page' alt='' />
                  </Link>
                </Navbar.Brand>
              </div>
              <div>
                {loginUser ? (
                  <NavDropdown title={<img src={User} className='navIcons' title='Go to Profile Page' alt='' onDoubleClick={() => navigate('login')} />} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      {loginUser.userName}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Navbar.Brand>
                    <Nav.Link as={Link} to='/login'>
                      Login
                    </Nav.Link>
                  </Navbar.Brand>
                )}
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
