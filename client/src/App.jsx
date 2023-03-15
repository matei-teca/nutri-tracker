import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import SearchByNameResult from "./components/SearchByNameResult";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchByNameResult />
      <ProductDetails/>
      <Footer />
    </div>
  );
}

export default App;
