import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'

const Footer = () => {
    return (
        <>
           
            <Container fluid className="container1 rounded-3 mt-5 ">
                <Row className="ms-5 me-5">
                    <Col md={3}>
                        <h4 className="fs-5 mt-5">Company</h4>
                        <div className="mt-3">
                            <h5 className="fs-6">About Us</h5>
                            <h5 className="fs-6">Join Us</h5>
                            <h5 className="fs-6">Transparency in Supply Chains</h5>
                        </div>

                    </Col>
                    <Col md={3}>
                        <h4 className="fs-5 mt-5">Customer Care</h4>
                        <div className="mt-3">
                            <h5 className="fs-6">FAQ</h5>
                            <h5 className="fs-6">Return Policy</h5>
                            <h5 className="fs-6">Promotion Terms & Conditions</h5>
                        </div>

                    </Col>
                    <Col md={3}>
                        <h4 className="fs-5 mt-5">Contact Us</h4>
                        <div className="mt-3">
                            <h5 className="fs-6">Track Order</h5>
                            <h5 className="fs-6">Sign in</h5>
                            <h5 className="fs-6">Store Locator</h5>
                        </div>

                    </Col>
                    <Col md={3}>
                        <h4 className="fs-5 mt-5 ">Be in the know.</h4>
                        <div className="mt-3">
                            <span className="fs-6 fw-semibold">Subscribe to receive science-backed tips, access to special offers, and new innovations.</span>
                            <h5 className="fs-6">Sign in</h5>
                            <h5 className="fs-6">Store Locator</h5>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label"></label>
                            <input type="email" class="form-control" id="email" placeholder="email@gmail.com" className="border-0 mt-2 p-2 w-100 rounded-3" />
                        </div>

                    </Col>
                </Row>
                <Row className="ms-5">
                    <Col md={12}>
                        <h4 className="fs-5 ms-2 ">Location</h4>
                        <i class="bi bi-geo-alt-fill  location ms-4" ></i>
                        <h4 className="ms-5 albania mb-5 fs-6">ALBANIA</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;