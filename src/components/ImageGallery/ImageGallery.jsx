import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos }) => {
  return (
    <ul className="gallery">
      <li>
        {photos !== null &&
          Array.isArray(photos) &&
          photos.map((photo) => <ImageCard img={photo} key={photo.id} />)}
      </li>
    </ul>
  );
};
export default ImageGallery;
