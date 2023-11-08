

const GalleryCard = ({photo}) => {
    const {img_url}=photo;
    return (
        <div>
          <img src={img_url} alt="" />
        </div>
    );
};

export default GalleryCard;