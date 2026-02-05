import Carousel from 'react-bootstrap/Carousel';
import './index.css'

import ordinary from '../../images/ordinary.webp';
import niacinamide from '../../images/niacinamide.webp';
import salicil from '../../images/salicil.webp'



const Carousel1 = () => {
    return (
        <>
            <Carousel className=''>
                <Carousel.Item>
                    <video
                        src="/video5.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="d-block w-100"
                        style={{

                            height: "700px",
                            objectFit: "cover",
                            backgroundColor: "black",

                        }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>


                    <img src={salicil} alt='' className='image' />
                    <Carousel.Caption>
                        <h1 className=' hydration text-dark fw-bold d-flex justify-center align-items-start h1 m-5 p-5 mb-5'>Hydration You Can Feel.<br></br>A Moisturizer You Can't</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video
                        src="/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="d-block w-100"
                        style={{

                            height: "700px",
                            objectFit: "cover",
                            backgroundColor: "black",

                        }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={niacinamide} alt='' className='image' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <video 
                        src="/video3.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="d-block w-100"
                        style={{
                        
                            height: "700px",
                            objectFit: "cover",
                            backgroundColor: "black",
                           
                        }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Carousel1;