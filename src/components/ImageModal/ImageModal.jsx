const ImageModal = ({ photos }) => {
  return (
    <>
      {photos !== null &&
        Array.isArray(photos) &&
        photos.map((photo) => (
          <div key={photo.id}>
            <img />
          </div>
        ))}
    </>
  );
};

export default ImageModal;
