const ImageCard = ({ img }) => {
  return (
    <div key={img.id} className="gallery-item">
      <img src={img.urls.small} alt={img.slug} />
    </div>
  );
};

export default ImageCard;
