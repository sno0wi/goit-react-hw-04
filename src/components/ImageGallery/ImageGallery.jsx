import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <ImageCard img={photo} key={photo.id} />
      ))}
    </div>
  );
};
export default ImageGallery;
