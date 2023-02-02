import Card from 'react-bootstrap/Card';
const google_maps_url = "https://www.google.com/maps/@";

function ExifData({ exifData }) {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        {/* <Card.Title>Image Data</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        {exifData?.device_manufacturer && <Card.Text>
          Device mfg: {exifData.device_manufacturer}
        </Card.Text>}
        {exifData?.device_model && <Card.Text>
          Device: {exifData.device_model}
        </Card.Text>}
        {exifData?.exposure && <Card.Text>
          Exposure: 1/{exifData.exposure}
        </Card.Text>}
        {exifData?.f_stop && <Card.Text>
          F-Stop: {exifData.f_stop.toFixed(1)}
        </Card.Text>}
        {exifData?.focal_length && <Card.Text>
          Focal Length: {exifData.focal_length}mm
        </Card.Text>}
        {exifData?.height_px && <Card.Text>
          Size: {exifData.height_px}px x {exifData.width_px}px
        </Card.Text>}
        {exifData.location && <Card.Link href={`https://www.google.com/maps/@${exifData.location},15z`} target="_blank" rel="noopener noreferrer">Image Location</Card.Link>}
      </Card.Body>
    </Card>
  );
}

export default ExifData;