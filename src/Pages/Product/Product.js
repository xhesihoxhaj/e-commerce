import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

import hydra from "../../images/hydra.webp"
import hydra1 from "../../images/hydra1.webp"
import hydra2 from "../../images/hydra2.webp"
import hydra3 from "../../images/hydra3.webp"
// import hydra4 from "../../images/hydra4.webp"
import './Product.css'
import Navbar1 from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
function ProductPage() {
    const product = {
        title: "Natural Moisturizing Factors + HA",
        price: "$7.99",
        description: "A non-greasy body moisturizer that supports the skin’s barrier function...",
        images: [
            hydra3, hydra, hydra1, hydra2  // foto anash 3
        ],
    };

    const [selectedImage, setSelectedImage] = useState(product.images[1]);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <Navbar1 />
            <Container className="my-5">
                <Row>
                    {/* FOTO ANASH */}
                    <Col md={2} className="d-none d-md-block mt-5 mb-5 ">
                        {product.images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                fluid
                                className="mb-3 sidebar-img"
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </Col>

                    {/* FOTO MADHE */}
                    <Col md={6} xs={12}>
                        <Image src={selectedImage} fluid rounded />
                    </Col>

                    {/* TE DHENAT E PRODUKTIT */}
                    <Col md={4} xs={12} className="info p-2 mt-5">
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-brand">The Ordinary</p>

                            <h4 className="product-price">{product.price}</h4>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <Form.Group className="mt-3">
                                <Form.Label className="qty-label">Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="qty-input"
                                />
                            </Form.Group>

                            <Button className="add-btn mt-4">
                                Add to Cart
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    );
}
export default ProductPage;
