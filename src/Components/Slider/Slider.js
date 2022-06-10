import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/banner/laptop1.jpeg'
import image2 from '../../images/banner/laptop2.jpg'
import image3 from '../../images/banner/laptop3.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className='mt-5 slid'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slid"
                        src={image3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slid"
                        src={image1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slid"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;