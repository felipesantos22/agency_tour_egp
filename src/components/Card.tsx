import { useContext, useState } from "react";
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

  // Order per price
  const [order, setOrder] = useState(filteredData);
  const sortPrice = () => {
    const sortetItems = [...items].sort((a, b) => a.price - b.price);
    setOrder(sortetItems);
  };

  const sortPriceDesc = () => {
    const sortetItems = [...items].sort((a, b) => a.price + b.price);
    setOrder(sortetItems);
  };

  const sortAlphabetically = () => {
    const sortedItems = [...filteredData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setOrder(sortedItems);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "1") {
      sortPrice();
    } else if (value === "2") {
      sortPriceDesc();
    } else if (value === "3") {
      sortAlphabetically();
    }
  };

  return (
    <>
      <select
      style={{
        width: "150px", // Define uma largura específica em pixels
        height: "40px" // Altura do componente
      }}
        className="form-select"
        aria-label="Default select example"
        onChange={handleSortChange}
      >
        <option selected>Selecione</option>
        <option value="1">Menor Preço</option>
        <option value="2">Maior Preço</option>
        <option value="3">Ordem Alfabetica</option>
      </select>
      <div className="container">
        {order.map((item, index) => (
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
