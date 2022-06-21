import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from '@material-ui/core/Container';


export default function photography() {

  return (
    <section id="photography">
      <br />
      <br />
      <h1>Photos</h1>
      <br />
      <Container maxWidth="sm">


        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image1.jpg')}
              alt="First image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image2.jpg')}
              alt="Second image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image3.jpg')}
              alt="Third image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image4.jpg')}
              alt="Fourth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image5.jpg')}
              alt="Fifth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image6.jpg')}
              alt="Sixth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image7.jpg')}
              alt="Seventh image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image8.jpg')}
              alt="Eigth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image9.jpg')}
              alt="Ninth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image10.jpg')}
              alt="Tenth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image11.jpg')}
              alt="Eleventh image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image12.jpg')}
              alt="Twelfth image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../public/images/image13.jpg')}
              alt="Thirteenth image"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
    </section>
  );
}