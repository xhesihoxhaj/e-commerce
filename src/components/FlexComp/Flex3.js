import { Container, Row, Col } from "react-bootstrap"
import roza from '../../images/roza.webp'
import { Link } from "react-router-dom"
const Flex3 = () => {
    return (
        <>
            <hr className="mb-5 mt-5"></hr>

            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <img src={roza} className="img-fluid rounded-2" />
                    </Col>
                    <Col md={6}>
                        <hr className="mt-5"></hr>
                        <hr></hr>
                        <h1 className="ms-5 mt-5">Your Lips Have Chemistry.</h1>
                        <p className="ms-5 mt-5 tex-center">My lips are so smooth. I have always struggled with<br></br> patches of dry skin on my lips, but no more.” - Jann</p>
                        <div className="d-flex jusstify-content-center">
                            <Link to="/product" className=''>
                                <button className="outline-dark btn-lg rounded-pill p-2 ms-5 mt-5">Smooth My Lips</button>
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Flex3