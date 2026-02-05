import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import './CardsSlider.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import card1 from '../images/card1.webp'
import glycolid from '../images/glycolid.webp'
import foundation from '../images/foundation.webp'
import hydra from '../images/hydra.webp'
import peptide from '../images/peptide.webp'
import hair from '../images/hair.webp'
import star_color from '../images/star_color.png'
import star_gray from '../images/star_gray.png'


const CardSlider = () => {
    return (
        <>
            <Swiper className="swiper"

                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={3}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Card style={{ width: '18rem' }} className="rounded-4 cardslide">
                        <img src={card1} className="image1 rounded-4" />
                       <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4 border-0">

                            <Card.Title className="fs-6">Hyaluronic Acid 2% + B5 (with Ceramides)</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>

                            <Button variant="outline-secondary " className="button ">Add To Card</Button>
                        </Card.Body>
                    </Card>

                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={foundation} className="image1 rounded-4" />
                       <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4">
                            <Card.Title className="fs-6">Serum Foundation</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button ">Add To Card</Button>
                        </Card.Body>
                    </Card>

                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={glycolid} className="image1 rounded-4" />
                        <Card.Body className="rounded-4">
                         <i class="bi bi-heart heart black"></i>
                            <h5 className="bestsellers fs-6">Bestsellers</h5>
                            <Card.Title>Glycolic Acid 7% Exfoliating Toner</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button ">Add To Card</Button>
                        </Card.Body>
                    </Card>

                </SwiperSlide>
                <SwiperSlide>

                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={hydra} className="image1 rounded-4" />
                        <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4">
                            <Card.Title>Natural Moisturizing Factors + PhytoCeramides</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button ">Add To Card</Button>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>

                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={peptide} className="image1 rounded-4" />
                       <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4">
                            <Card.Title>Multi-Peptide Eye Serum</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button">Add To Card</Button>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>

                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={hair} className="image1 rounded-4" />
                        <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4">
                            <Card.Title>Multi-Peptide Eye Serum</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button ">Add To Card</Button>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>

                    <Card style={{ width: '18rem' }} className="cardslide rounded-4">
                        <img src={card1} className="image1 rounded-4" />
                       <i class="bi bi-heart heart black"></i>
                        <h5 className="bestsellers fs-6">Bestsellers</h5>
                        <Card.Body className="rounded-4">
                            <Card.Title>Niacinamide 10% + Zinc 1%</Card.Title>
                            <Card.Text>
                                <ul className="list">
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_color} /></li>
                                    <li><img src={star_gray} /></li>
                                </ul>
                                 <span className="plumps">Plumps, Smooths</span>
                            </Card.Text>
                            <Button variant="outline-secondary " className="button" >Add To Card</Button>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

            </Swiper>
            <hr></hr>
        </>
    )
}

export default CardSlider;