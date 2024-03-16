const ImageCard = ({ img, openModal }) => {
  return (
    <div key={img.id} className="gallery-item">
      <img
        src={img.urls.small}
        alt={img.slug}
        onClick={() => {
          openModal();
        }}
      />
    </div>
  );
};

export default ImageCard;
