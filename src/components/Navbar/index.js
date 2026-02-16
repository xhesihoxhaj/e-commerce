import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

const Navbar1 = ({ cartItemsCount = 0 }) => {
  // Produktet
  const products = [
    {
      id: 1,
      image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2e935a6b/Images/products/The%20Ordinary/rdn-hyaluronic-acid-2pct-b5-30ml.png',
      title: 'Hyaluronic Acid 2% + B5',
      description: 'Plumps, Smooths',
      loaction: "Tirane"
    },
    {
      id: 2,
      image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0801bd5b/Images/products/The%20Ordinary/rdn-glycolic-acid-7pct-toning-solution-240ml.png',
      title: 'Glycolic Acid 7% Toner',
      description: 'Evens Texture & Tone, Radiance',
      loaction: "Vlore"
    },
    {
      id: 3,
      image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0c2b8b1e/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-100ml.png',
      title: 'Natural Moisturizing Factors + HA',
      description: 'Supports Skin Barrier',
      loaction: "Durres"
    }
  ];

  // STATE
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState('');
  const [showMenu, setShowMenu] = useState(false); // PER MOBILE MENU


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // FUNCTIONS
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearch('');
    }

  };

  const changeLocation = (e) => {
    const value = e.target.value.toLowerCase();
    setLocation(value);
  };


  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    setEmail('');
    setPassword('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login me:', { email, password });
    alert(`Po përpiqesh të hysh me email: ${email}`);
    handleCloseLogin();
  };

  const handleLocationClick = () => {
    setShowLocation(!showLocation);

  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const filteredProducts = search.length > 0
    ? products.filter((p) => p.title.toLowerCase().includes(search))

    : [];

  return (
    <>
      <Navbar expand="lg" className='bg-secondary-subtle'>
        <Container fluid className='px-3 px-md-4'>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className='fs-6 fw-semibold'>
            THE <br />
            <span className='fw-bold fs-4'>ORDINARY</span>
          </Navbar.Brand>

          {/* DESKTOP MENU (fshihet ne mobile) */}
          <Nav className="d-none d-lg-flex me-auto ms-5 text-dark fw-semibold gap-3">
            <Link to="/" className='menu text-decoration-none text-dark'>Home</Link>
            <Link to="/bestsellers" className='menu text-decoration-none text-dark'>BestSellers</Link>
            <Link to="/product" className='menu text-decoration-none text-dark'>Product</Link>
            <Link to="/body-hair" className='menu text-decoration-none text-dark'>Body + Hair</Link>
            <Link to="/sets" className='menu text-decoration-none text-dark'>Sets & Collections</Link>
            <Link to="/library" className='menu text-decoration-none text-dark'>The O.Library</Link>
          </Nav>

          {/* IKONA - Te dukshme gjithmon */}
          <div className='d-flex align-items-center gap-2 gap-md-3'>

            {/* SEARCH */}
            <i
              className="icons bi bi-search fs-5"
              style={{ cursor: 'pointer' }}
              onClick={handleSearchIconClick}
              title="Search"></i>

            {/* LOCATION (fshihet ne mobile) */}
            <div className='d-none d-md-block position-relative'>
              <i
                className="icons bi bi-geo-alt-fill fs-5"
                style={{ cursor: 'pointer' }}
                onClick={handleLocationClick} ></i>

              {showLocation && (
                <div style={{
                  position: 'absolute',
                  top: '35px',
                  right: '0',
                  background: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '10px 15px',
                  minWidth: '150px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>

                  <p style={{ margin: 0, fontSize: '14px' }}>📍 Tiranë, Shqipëri</p>
                  <small style={{ color: '#666' }} onChange={changeLocation}>Ndrysho vendndodhjen</small>
                </div>
              )}
            </div>

            {/* LOGIN */}
            <i
              className="icons bi bi-person-fill fs-5"
              style={{ cursor: 'pointer' }}
              onClick={handleLoginClick}
              title="Login"></i>

            {/* CART */}
            <Link to="/cart" className='text-dark text-decoration-none position-relative'>
              <i className="icons bi bi-cart4 fs-5"></i>
              {cartItemsCount > 0 && (
                <span
                  className='badge bg-danger'
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-12px',
                    fontSize: '10px',
                    padding: '3px 6px'
                  }}>
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* HAMBURGER MENU (vetem ne mobile) */}
            <i
              className="d-lg-none bi bi-list fs-3"
              style={{ cursor: 'pointer' }}
              onClick={handleMenuToggle}></i>
          </div>
        </Container>

        {/* SEARCH INPUT - Responsive */}
        {showSearch && (
          <div className='w-25  py-2 bg-white border-top'>
            <input
              type="text"
              placeholder="Kërko produkte..."
              value={search}
              onChange={handleChange}
              autoFocus
              className="form-control"
              style={{ maxWidth: '300px', margin: '0 auto' }} />
          </div>
        )}

        {/* SEARCH RESULTS - Responsive */}
        {showSearch && filteredProducts.length > 0 && (
          <div
            className="search-results bg-white border p-1"
            style={{
              position: 'absolute',
              top: showSearch ? '120px' : '70px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '500px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 1000,
              borderRadius: '5px' }}>
            <h6 className='mb-3 text-muted'>Rezultatet:</h6>
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className='d-flex align-items-center mb-2 p-2 rounded'
                style={{
                  cursor: 'pointer',
                  transition: 'background 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: '50px',
                    height: '50px',
                    marginRight: '10px',
                    objectFit: 'contain'}}/>
                <div>
                  <strong style={{ fontSize: '14px' }}>{p.title}</strong>
                  <p className='mb-0 text-muted' style={{ fontSize: '12px' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>)}

        {/* NO RESULTS */}
        {showSearch && search.length > 0 && filteredProducts.length === 0 && (
          <div
            className='bg-white border p-3 text-center'
            style={{
              position: 'absolute',
              top: showSearch ? '120px' : '70px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '500px',
              zIndex: 1000,
              borderRadius: '5px'}}>
            <p className='mb-0 text-muted'>Asnjë produkt nuk u gjet për "{search}"</p>
          </div>)}
      </Navbar>

      {/* MOBILE MENU OFFCANVAS */}
      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Link to="/" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              Home
            </Link>
            <Link to="/bestsellers" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              BestSellers
            </Link>
            <Link to="/product" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              Product
            </Link>
            <Link to="/body-hair" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              Body + Hair
            </Link>
            <Link to="/sets" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              Sets & Collections
            </Link>
            <Link to="/library" className='text-decoration-none text-dark fw-semibold' onClick={handleMenuToggle}>
              The O.Library
            </Link>

            <hr />

            {/* Location ne mobile */}
            <div className='d-flex align-items-center gap-2'>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Tiranë, Shqipëri</span>
              
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* LOGIN MODAL */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title className='login'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className=''>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Shkruaj email-in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fjalëkalimi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Shkruaj fjalëkalimin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Më mbaj mend" />
              <a href="#" style={{ fontSize: '14px' }}>Ke harruar fjalëkalimin?</a>
            </div>

            <Button variant="dark" type="submit" className="w-100">
              Hyr
            </Button>
          </Form>

          <div className="text-center mt-3">
            <small>Nuk ke llogari? <a href="#">Regjistrohu këtu</a></small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar1;