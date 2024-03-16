import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos, handleSelectPhoto }) => {
  return (
    <ul className="gallery">
      <li>
        {photos !== null &&
          Array.isArray(photos) &&
          photos.map((photo) => (
            <ImageCard
              img={photo}
              key={photo.id}
              handleSelectPhoto={handleSelectPhoto}
            />
          ))}
      </li>
    </ul>
  );
};
export default ImageGallery;
