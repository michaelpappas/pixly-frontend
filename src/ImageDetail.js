import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import PixlyApi from './helpers/api';
import { S3_BASE_URL, ORIGINALS_FOLDER_PATH, THUMBNAILS_FOLDER_PATH } from './App';

function ImageDetail() {
  const { id } = useParams();

  const [image, setImage] = useState({
    data: null,
    isLoading: true
  }
  );

  useEffect(function fetchImageOnMount() {
    async function getAndSetImage() {
      const image = await PixlyApi.getImage(id);
      setImage({ data: image, isLoading: false });
    }
    getAndSetImage();
  }, []);






  if (image.isLoading) {
    return <h2>Loading... </h2>;
  }

  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={`${S3_BASE_URL}${ORIGINALS_FOLDER_PATH}${image.data.file_name}`} />
      <Card.Body>
        <Card.Title>{image.data.title}</Card.Title>
        <Card.Text>
          {image.data.caption}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageDetail;