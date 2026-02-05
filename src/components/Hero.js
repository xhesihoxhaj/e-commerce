
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eye from '../images/eye.webp'
import dryness from '../images/dryness.webp'
import congestion from '../images/congestion.webp'
import texture from '../images/texture.webp'
import aging from '../images/aging.webp'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <Container className='mt-4'>
      <Row className='mt-5'>
        <Col md={2} className='gap-3'>
        <img src={dryness} className='img-fluid gallery rounded-3' />
        <span>Dryness</span> <i class="bi bi-arrow-right"></i>
        </Col>
         <Col md={2} className='gap-4 '>
         <img src={congestion} className='img-fluid gap-3 rounded-3 gallery'/>
           <span>Congestion</span> <i class="bi bi-arrow-right"></i>
        </Col>
         <Col md={2}>
        <img src={eye} className='img-fluid rounded-3 gallery'/>
          <span>Eye Care</span> <i class="bi bi-arrow-right"></i>
        </Col>
          <Col md={2}>
         <img src={aging} className='img-fluid rounded-3 gallery'/>
           <span>Aging</span> <i class="bi bi-arrow-right"></i>
        </Col>
          <Col md={2}>
        <img src={texture} className='img-fluid rounded-3 gallery'/>
          <span>Texture Skin</span> <i class="bi bi-arrow-right"></i>
        </Col>
         <Col md={2}>
         <img src={eye} className='img-fluid rounded-3 gallery'/>
           <span>Eye Care</span> <i class="bi bi-arrow-right"></i>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Hero