

const GalleryCard = ({photo}) => {
    const {img_url,title}=photo;
    console.log(photo)
    return (
        <div>
          <div >
          <img  src={img_url} alt="" />

          </div>
            <h2 className="bg-black text-white text-xl font-serif font-semibold text-center py-2 ">{title}</h2>
        </div>
    );
};

export default GalleryCard;