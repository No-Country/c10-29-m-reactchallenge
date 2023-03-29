import Carousel from 'react-bootstrap/Carousel';
import rectangle from '../../../assets/Rectangle.png';

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
          src={rectangle}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rectangle}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;