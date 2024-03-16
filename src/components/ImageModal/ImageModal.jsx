const ImageModal = ({ selectedImg }) => {
  console.log(selectedImg);
  return (
    <>
      {selectedImg !== null && (
        <div>
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
