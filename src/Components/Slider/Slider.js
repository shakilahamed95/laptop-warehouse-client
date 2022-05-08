import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/banner/image1.jpeg'
import image2 from '../../images/banner/image2.jpeg'
import image3 from '../../images/banner/image3.jpeg'

const Slider = () => {
    return (
        <div className='mt-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark'>HP LAPTOPS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>LENOVO LAPTOPS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>DELL LAPTOPS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;