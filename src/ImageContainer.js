import ImageCard from "./ImageCard";


function ImageContainer({ images }) {
  console.log("images", images);
  return (
    <>
      {images.map(image => <ImageCard image={image} key={image.file_name} />)}
    </>
  );
}

export default ImageContainer;
