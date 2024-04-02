import { useContext } from "react";
import "../App.css";

import { DataContext } from "../context/DataContext";

const Card = () => {
  const context = useContext(DataContext);

  if (!context) {
    return null;
  }

  const {
    orderedData, // Alterado para usar dados ordenados
    handleSortChange,
  } = context;

  return (
    <>
      <select
        style={{
          width: "150px", // Define uma largura específica em pixels
          height: "40px", // Altura do componente
        }}
        className="form-select"
        aria-label="Default select example"
        onChange={handleSortChange}
      >
        <option value="1">Selecione</option>
        <option value="1">Menor Preço</option>
        <option value="2">Maior Preço</option>
        <option value="3">Ordem Alfabetica</option>
      </select>
      <div className="container">
        {orderedData.map((item, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">$ {item.price}</p>
              <a href="#" className="btn btn-info">
                Clique
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
