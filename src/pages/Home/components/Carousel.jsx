import Carousel from 'react-bootstrap/Carousel';
import rectangle from '../../../assets/slide-1.jpg';
import slide2 from '../../../assets/slide-2.jpg';
import slide3 from '../../../assets/slide-3.jpg';
import slide4 from '../../../assets/slide-4.jpg';
import slide5 from '../../../assets/slide-5.jpg';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rectangle}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Second slide"
        />

       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="Second slide"
        />

       
      </Carousel.Item>






    </Carousel>
  );
}

export default UncontrolledExample;