import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import './index.css'

const Navbar1 = () => {
  return (
    <>
      <Navbar className='bg-secondary-subtle' >
        <Container>
          <Navbar.Brand href="#home" className='fs-6 ms-4 fw-semibold'>THE <br></br><span className='fw-bold fs-4'>ORDINARY</span></Navbar.Brand>
          <Nav className=" me-auto ms-5 px-5 text-white fw-semibold gap-3 ">

            <Nav.Link href="#home" className='hover:underline menu'>Home</Nav.Link>
            <Nav.Link href="#features" className='menu gap-3'>Bestsellers</Nav.Link>
            <Nav.Link href="#features" className='menu'>New&Featured</Nav.Link>
            <Nav.Link href="#features" className='menu'>Body+Hair</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>Sets&Collections</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>The O.Library</Nav.Link>
          </Nav>

        </Container>
        <div className='me-4'>
          <i class=" icons bi bi-search fs-5 "></i>
          <i class=" icons bi bi-geo-alt-fill fs-5 "></i>
          <i class=" icons bi bi-person-fill fs-5 "></i>
          <i class=" icons bi bi-cart4 fs-5 "></i>
        </div>

        {/* <Button variant="outline-dark" className='rounded-pill p-2 me-4 hover:black'>Build My Regimen</Button> */}
      </Navbar>
    </>
  )
}

export default Navbar1;