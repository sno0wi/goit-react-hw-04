import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, handleSelectPhoto }) => {
  return (
    <ul className={css.gallery_list}>
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
