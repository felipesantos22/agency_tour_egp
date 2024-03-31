// import { useState } from "react";
import "./App.css";
// import items from "./Data/Item";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardProvider from "./context/DataContext";

// Será refatorado para Context Api

const App = () => {
  // Será refatorado para context Api
  // const [filter, setFilter] = useState("");

  // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter(event.target.value);
  // };

  // const filteredData = items.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <CardProvider>
        <Navbar />
        <Card />
        <Footer />
      </CardProvider>
    </>
  );
};

export default App;
