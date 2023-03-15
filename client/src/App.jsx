import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import SearchByNameResult from "./components/SearchByNameResult";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useAtom } from "jotai";
import state from "./components/AtomStates";
import ProgressList from "./components/ProgressList";

function App() {
  const [showDiary] = useAtom(state.showDiary);
  console.log(showDiary);
  return (
    <>
      {showDiary ? (
        <ProgressList />
      ) : (
        <div className="App">
          <Navbar />
          <SearchByNameResult />
          <ProductDetails />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
