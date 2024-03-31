import { useContext } from "react";
import "../App.css";

// import Item from "../Interfaces/Item";
import { DataContext } from "../context/DataContext";
import items from "../Data/Item";

// interface CardProps {
//   filteredData: Item[];
// }

// const Card: React.FC<CardProps> = ({ filteredData }) => {
const Card = () => {
  const context = useContext(DataContext);

  if (!context) {
    return null;
  }

  const { filter } = context;

  const filteredData = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="container">
        {filteredData.map((item, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
