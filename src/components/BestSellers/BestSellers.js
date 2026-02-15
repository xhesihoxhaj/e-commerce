import BestSellers from '../../images/Bestsellers.webp'
import './Bestsellers.css'
import Navbar1 from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';


const BestSellersProducts = () => {


    const products = [
        {
            id: 1,
            image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2e935a6b/Images/products/The%20Ordinary/rdn-hyaluronic-acid-2pct-b5-30ml.png',
            title: 'Hyaluronic Acid 2% + B5',
            description: 'Plumps, Smooths',
            format1: '30ml',
            price1: '€9.90',
            format2: '60ml',
            price2: '€16.80'
        },
        {
            id: 2,
            image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0801bd5b/Images/products/The%20Ordinary/rdn-glycolic-acid-7pct-toning-solution-240ml.png',
            title: 'Glycolic Acid 7% Toner',
            description: 'Evens Texture & Tone, Radiance',
            format1: '100ml',
            price1: '€9.60',
            format2: '240ml',
            price2: '€18.90'
        },
        {
            id: 3,
            image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0c2b8b1e/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-100ml.png',
            title: 'Natural Moisturizing Factors + HA',
            description: 'Supports Skin Barrier',
            format1: '30ml',
            price1: '€7.50',
            format2: '100ml',
            price2: '€14.90'
        },
        {
            id: 4,
            image: 'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw5e9c8b1a/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-60ml.png',
            title: 'Niacinamide 10% + Zinc 1%',
            description: 'Oil Control, Brightens, Smooths',
            format1: '30ml',
            price1: '€5.00',
            format2: '60ml',
            price2: '€6.00'
        }
    ];


    const [selectedFormat, setSelectedFormat] = useState({
        1: 1,
        2: 1,
        3: 1,
        4: 1
    });


    const handleFormatClick = (productId, formatNumber) => {
        setSelectedFormat({
            ...selectedFormat,
            [productId]: formatNumber
        });
    };

    return (
        <>
            <Navbar1 />


            <div>
                <img src={BestSellers} className='img-fluid' alt="Bestsellers" />
                <h3 className='h3 fw-bold text-center mt-4'>Bestsellers</h3>
                <p className=' para fw-semibold'>
                    Explore our community's most loved and bestselling skincare <br />
                    products that offer efficacious solutions for their skincare concerns.
                </p>
            </div>


            <Container className="py-5">
                <Row className="g-4">
                    {products.map((product) => (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="h-100 border">


                                <div className="bg-light p-4">
                                    <Card.Img src={product.image} alt={product.title} />
                                </div>

                                <Card.Body>

                                    <Card.Title style={{ fontSize: '14px' }}>
                                        {product.title}
                                    </Card.Title>


                                    <Card.Text className="text-muted" style={{ fontSize: '12px' }}>
                                        {product.description}
                                    </Card.Text>


                                    <ButtonGroup className="mb-3 w-100" size="sm">
                                        <Button
                                            variant={selectedFormat[product.id] === 1 ? 'dark' : 'outline-secondary'}
                                            onClick={() => handleFormatClick(product.id, 1)}>
                                            {product.format1}
                                        </Button>
                                        <Button
                                            variant={selectedFormat[product.id] === 2 ? 'dark' : 'outline-secondary'}
                                            onClick={() => handleFormatClick(product.id, 2)} >
                                            {product.format2}
                                        </Button>
                                    </ButtonGroup>


                                    <p className="fw-semibold" style={{ fontSize: '18px' }}>
                                        {selectedFormat[product.id] === 1 ? product.price1 : product.price2}
                                    </p>


                                    <Button variant="dark" className="w-100" size="sm">
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default BestSellersProducts;