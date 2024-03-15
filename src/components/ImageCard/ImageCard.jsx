const ImageCard = ({ img }) => {
  return (
    <li key={img.id} className="gallery-item">
      <a href={img.urls.full}>
        <img src={img.urls.small} alt={img.slug} />
      </a>
    </li>
  );
};

export default ImageCard;
