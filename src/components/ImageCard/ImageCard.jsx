const ImageCard = ({ img, handleSelectPhoto }) => {
  return (
    <div className="gallery-item">
      <img
        src={img.urls.small}
        alt={img.slug}
        onClick={() => {
          handleSelectPhoto(img);
        }}
      />
    </div>
  );
};

export default ImageCard;
