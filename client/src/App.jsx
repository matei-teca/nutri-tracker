import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import SearchByNameResult from "./components/SearchByNameResult";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import MyProfile from "./components/MyProfile";
import { useAtom } from "jotai";
import state from "./components/AtomStates";
import ProgressList from "./components/ProgressList";
import ConsumedList from "./components/ConsumedList";

function App() {
  const [showMyProfile] = useAtom(state.showMyProfile);
  const [showDiary] = useAtom(state.showDiary);
  
  return (
    <>
      <Navbar />
      {showDiary ? (

        // Diary part of the app
        <div className="diary-container">
          <ConsumedList />
          <ProgressList />
          <Footer />
        </div>
      ) : (

        // Main part of the app
        <div className="App">
          {showMyProfile ? (
            <MyProfile />
          ) : (
            <div style={{display: "flex"}}>
              <SearchByNameResult />
              <ProductDetails />
            </div>
          )}

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
