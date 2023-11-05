const RoomsCard = ({ rooms }) => {
  const { title, img1, price, size,description } = rooms;
  return (
    <div>
      <div className="relative flex card-compact   border h-[250px]">
        <figure className="w-2/3">
          <img className="w-full h-full"
            src={img1}
            alt="room"
          />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title">{title}</h2>
          
          <p>Price per night: {price}</p>
          <p>{size}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
