import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import PixlyApi from './helpers/api';
import { S3_BASE_URL, ORIGINALS_FOLDER_PATH } from './App';
import ExifData from './ExifData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EyeFill } from 'react-bootstrap-icons';


function ImageDetail() {
  const { id } = useParams();

  const [image, setImage] = useState({
    data: null,
    isLoading: true
  }
  );

  useEffect(function fetchImageOnMount() {
    async function getAndSetImage() {
      await PixlyApi.addView(id);

      const image = await PixlyApi.getImage(id);
      setImage({ data: image, isLoading: false });
    }
    getAndSetImage();
  }, []);
  console.log(image.data);

  if (image.isLoading) {
    return <h2>Loading... </h2>;
  }
  return (
    <Container>
      <Row className='d-flex justify-content-center mt-4 mb-3'>
        <Col xs={9} className='d-flex flex-column align-items-center'>
          <Card className='w-100 mb-2'>
            <Card.Img variant="top" src={`${S3_BASE_URL}${ORIGINALS_FOLDER_PATH}${image.data.file_name}`} />
            <Card.Body>
              <Card.Title>{image.data.title}</Card.Title>
              <Card.Text>
                {image.data.caption}
              </Card.Text>
              <Card.Text>
                <EyeFill />  {image.data.views}
              </Card.Text>
            </Card.Body>
          </Card>
          <ExifData exifData={image.data.exif_data} />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageDetail;