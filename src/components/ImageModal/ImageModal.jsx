import css from "./ImageModal.module.css";
const ImageModal = ({ selectedImg }) => {
  return (
    <>
      {selectedImg !== null && (
        <div className={css.imgWrapper}>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
          />
        </div>
      )}
    </>
  );
};

export default ImageModal;
