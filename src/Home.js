import React from 'react';
import ImageContainer from "./ImageContainer";
import FiltersForm from './FiltersForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**Home
 * state: none
 * props: images - array of image objects
 *
 * RoutList -> Home
 */
function Home({ images, handleSearch }) {
  return (
    <>
      <Container>
        <Row className='mt-4 mb-3 d-flex justify-content-center'>
          <Col xs={8}>
            <FiltersForm handleSearch={handleSearch} />
          </Col>
        </Row>
      </Container>
      <ImageContainer images={images} />
    </>
  );
}

export default Home;