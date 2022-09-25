import Carousel from 'react-bootstrap/Carousel';
import images01 from '../pic/02/01.png'
import images02 from '../pic/04/04.jpg'
import images03 from '../pic/01/01.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {images01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ポートフォリオサイトへようこそ!!</h3>
          <p>Welcome to my portfolio site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {images02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>上部のバーからメニューの選択ができます</h3>
          <p>You can select the menu from top var</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ごゆっくりどうぞ</h3>
          <p>
            Please enjoy
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;