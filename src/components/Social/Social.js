import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
const Social = () => {
    return (
        <>
<hr className="mt-5"></hr>
            <Container fluid className="mt-5">
                <Row>
                    <Col md={12}>
                        <Swiper className="swiper"

                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={5}
                            slidesPerView={4}
                            navigation 
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: false }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay={{
                                delay: 1000, 
                                disableOnInteraction: false, // vazhdon edhe nese e prek useri
                                pauseOnMouseEnter: true // ndalon kur kalon mouse
                            }}
                            loop={true}>
                            <SwiperSlide>
                                <Card style={{ width: '18rem' }} className="rounded-4 ">
                                    <video
                                        src="/social1.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4 border-0">
                                        <Card.Title className="fs-6">Hyaluronic Acid 2% + B5 (with Ceramides)</Card.Title>


                                        <Button variant="outline-secondary " className="button ">Add To Card</Button>
                                    </Card.Body>
                                </Card>

                            </SwiperSlide>

                            <SwiperSlide>
                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social2.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title className="fs-6">Serum Foundation</Card.Title>

                                        <Button variant="outline-secondary " className="button ">Add To Card</Button>
                                    </Card.Body>
                                </Card>

                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social3.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Glycolic Acid 7% Exfoliating Toner</Card.Title>

                                        <Button variant="outline-secondary " className="button ">Add To Card</Button>
                                    </Card.Body>
                                </Card>

                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social4.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Natural Moisturizing Factors + PhytoCeramides</Card.Title>

                                        <Button variant="outline-secondary " className="button ">Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social5.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Multi-Peptide Eye Serum</Card.Title>

                                        <Button variant="outline-secondary " className="button">Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social6.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Multi-Peptide Eye Serum</Card.Title>

                                        <Button variant="outline-secondary " className="button ">Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social6.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>

                                        <Button variant="outline-secondary " className="button" >Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social7.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>

                                        <Button variant="outline-secondary " className="button" >Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social8.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>

                                        <Button variant="outline-secondary " className="button" >Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social9.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>

                                        <Button variant="outline-secondary " className="button" >Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Card style={{ width: '18rem' }} className="">
                                    <video
                                        src="/social10.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="d-block w-100 rounded-3"
                                        style={{

                                            height: "400px",
                                            objectFit: "cover",
                                            backgroundColor: "black",

                                        }}
                                    />
                                    <Card.Body className="rounded-4">
                                        <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>

                                        <Button variant="outline-secondary " className="button" >Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                        </Swiper>

                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Social