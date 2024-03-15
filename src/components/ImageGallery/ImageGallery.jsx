import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <>
      {photos.map((photo) => (
        <ImageCard img={photo} key={photo.id} />
      ))}
    </>
  );
};
export default ImageGallery;
