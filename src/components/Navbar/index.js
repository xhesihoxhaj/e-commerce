// src/components/Navbar/index.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './index.css';

const Navbar1 = ({ cartItemsCount = 0 }) => {
  return (
    <Navbar className='bg-secondary-subtle'>
      <Container>
        {/* Logo që të çon në Home */}
        <Navbar.Brand as={Link} to="/" className='fs-6 ms-4 fw-semibold'>
          THE <br />
          <span className='fw-bold fs-4'>ORDINARY</span>
        </Navbar.Brand>

        <Nav className="me-auto ms-5 px-5 text-dark fw-semibold gap-3">
          {/* ✅ Ndryshon href në "to" dhe Nav.Link në Link */}
          <Link to="/" className='menu text-decoration-none text-dark'>
            Home
          </Link>
          <Link to="/bestsellers" className='menu text-decoration-none text-dark'>
            BestSellers
          </Link>
          <Link to="/product" className='menu text-decoration-none text-dark'>
            Product
          </Link>
          <Link to="/body-hair" className='menu text-decoration-none text-dark'>
            Body + Hair
          </Link>
          <Link to="/sets" className='menu text-decoration-none text-dark'>
            Sets & Collections
          </Link>
          <Link to="/library" className='menu text-decoration-none text-dark'>
            The O.Library
          </Link>
        </Nav>
      </Container>

      <div className='me-4'>
        <i className="icons bi bi-search fs-5"></i>
        <i className="icons bi bi-geo-alt-fill fs-5"></i>
        <i className="icons bi bi-person-fill fs-5"></i>
        <Link to="/cart" className='text-dark text-decoration-none'>
          <i className="icons bi bi-cart4 fs-5"></i>
          {cartItemsCount > 0 && (
            <span className='badge bg-danger ms-1'>{cartItemsCount}</span>
          )}
        </Link>
      </div>
    </Navbar>
  );
};

export default Navbar1;