import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, handleSelectPhoto }) => {
  return (
    <ul className={css.gallery_list}>
      {photos !== null &&
        Array.isArray(photos) &&
        photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard img={photo} handleSelectPhoto={handleSelectPhoto} />
          </li>
        ))}
    </ul>
  );
};
export default ImageGallery;
