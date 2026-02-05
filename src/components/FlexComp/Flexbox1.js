import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Flex2 = () => {
    return (
        <>
            <hr className='mt-5'></hr>
            <Container className='mt-5'>
                <Row>
                    <Col md={4} className='mt-5'>
                    <hr className='mt-5'></hr>
                        
                            <h1 className="fw-bold fs-4 mt-5 ms-4">GF 15% Solution Turns 1.</h1>
                            <p className='mt-4 fs ms-4'>This age-support serum became a fast favourite<br></br> within our community. Try it for yourself.</p>
                       

                        <div>
                            <button className='outline-dark btn-lg rounded-pill p-2 mt-3 ms-4'>GF 15% Solution</button>
                        </div>
                    </Col>
                    <Col md={7} className='ms-5'>
                        <video
                            src="/flex2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className=" video d-block w-100"
                            style={{

                                height: "600px",
                                objectFit: "cover",
                                backgroundColor: "black",

                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Flex2;