const ImageCard = ({ img }) => {
  console.log(img);
  return (
    <div id={img.id}>
      <a href={img.urls.full}>
        <img src={img.urls.small} alt={img.slug} />
      </a>
    </div>
  );
};

export default ImageCard;
