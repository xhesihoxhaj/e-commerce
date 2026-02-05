import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Flex.css'

const Flex1 = () => {
  return (
    <>

      <Container className='mt-5'>
        <Row>
          <hr className='mt-5'></hr>

          <Col md={5} className='mt-5'>
            <hr className='mt-5'></hr>
            <hr></hr>
            <h1 className='fs-3 mt-5 fw-semibold'>New Year, New<br></br> Formulations.</h1>
            <p className='mt-4'>Filter our formulations by your top concerns and find the right products for your New Year skin<br></br> journey.</p>
          </Col>

          <Col md={6} className='kolona ms-5 mt-5'>
            <Container>
              <Row> <h1 className='d-flex justify-content-center align-items-center mt-5 mb-5'>I am looking for</h1></Row>
              <Row>

                <Col md={6} className=''>
                  <select class="form-select form-select-lg" aria-label="Small select example" className='w-100 border-0 underline mt-5 mb-3 p-2 rounded '>

                    <option selected className='text-center'>product type</option>

                    <option value="1" className='bg-secondary-subtle'>Facial Cleanser</option>
                    <option value="2" className='bg-secondary-subtle'>Toners</option>
                    <option value="3" className='bg-secondary-subtle'>Eye Serums</option>
                    <option value="2" className='bg-secondary-subtle'>Serums</option>
                    <option value="2" className='bg-secondary-subtle'>Exfoliators</option>
                    <option value="2" className='bg-secondary-subtle'>Face Oils</option>
                    <option value="2" className='bg-secondary-subtle'>Face Masques</option>
                    <option value="2" className='bg-secondary-subtle'>Moisturizers</option>
                  </select>
                </Col>
                <Col md={4}>
                  <h4 className='mt-5 fs-3 fw-semibold ms-3'>to target</h4>
                </Col>
              </Row>
              <Row className='mt- ms-1'>
                <select class="form-select form-select-lg " aria-label="Small select example" className='w-75 border-0 underline mt-5 p-2 rounded'>

                  <option selected className='text-center'> concern</option>
                  <option value="1">Facial Cleanser</option>
                  <option value="2">Toners</option>
                  <option value="3">Eye Serums</option>
                  <option value="2">Serums</option>
                  <option value="2">Exfoliators</option>
                  <option value="2">Face Oils</option>
                  <option value="2">Face Masques</option>
                  <option value="2">Moisturizers</option>
                </select>
              </Row>
              <div className='mt-5  mb-5'>
                <button className='outline-dark rounded-pill btn-lg py-2'>Get my formulation</button>
              </div>
            </Container>


          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Flex1;