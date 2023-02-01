
const S3_BASE_URL = "https://michael-pappas.s3.us-west-2.amazonaws.com/pixly/images/originals/";

function ImageCard({ image }) {
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={`${S3_BASE_URL}${image.file_name}`} alt={image.title}></img>
    </div>
  );
};

export default ImageCard;