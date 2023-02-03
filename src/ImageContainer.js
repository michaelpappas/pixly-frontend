import ImageCard from "./ImageCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ImageContainer({ images }) {
  console.log("images", images);
  return (
    <>
      <Container>
        <Row>
          {images.map(image =>
            <Col xs={6} md={4} lg={3} className='my-3'>
              <ImageCard image={image} key={image.file_name} />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default ImageContainer;


