import './ImageCard.css';
import { S3_BASE_URL, ORIGINALS_FOLDER_PATH, THUMBNAILS_FOLDER_PATH } from './App';
import { Link } from 'react-router-dom';

function ImageCard({ image }) {
  return (
    <div className='ImageCard'>
      <h2>{image.title}</h2>
      <Link to={`/${image.id}`}>
        <img
          src={`${S3_BASE_URL}${ORIGINALS_FOLDER_PATH}${image.file_name}`}
          alt={image.title}
        />
      </Link>
    </div>
  );
};

export default ImageCard;