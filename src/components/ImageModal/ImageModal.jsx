import css from "./ImageModal.module.css";
const ImageModal = ({ selectedImg }) => {
  return (
    <>
      {selectedImg !== null && (
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
            className={css.img}
          />
        </div>
      )}
    </>
  );
};

export default ImageModal;
