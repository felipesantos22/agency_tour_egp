import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardProvider from "./context/DataContext";


const App = () => {

  return (
    <>
      <CardProvider>
        <Navbar />
        <Carousel/>        
        <Card />
        <Footer />
      </CardProvider>
    </>
  );
};

export default App;
