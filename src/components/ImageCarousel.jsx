import { Carousel } from 'react-bootstrap';

const imageFiles = [
  `${import.meta.env.BASE_URL}pictures/IMG_6401.JPEG`,
  `${import.meta.env.BASE_URL}pictures/IMG_6402.JPEG`,
  `${import.meta.env.BASE_URL}pictures/IMG_6403.JPEG`,
];

export default function ImageCarousel() {
  return (
    <Carousel fade className="image-carousel mb-5">
      {imageFiles.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              height: '500px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}