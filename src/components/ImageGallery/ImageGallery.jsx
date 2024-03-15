import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos }) => {
  return (
    <ul className="gallery">
      {photos.map((photo) => (
        <ImageCard img={photo} key={photo.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;
