import Item from "../Interfaces/Item";
import "../App.css";

const Card = ({ name, image, price }: Item) => {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">$ {price}</p>
          <a href="#" className="btn btn-primary">
            Clique
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
