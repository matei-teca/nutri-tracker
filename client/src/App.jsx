import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import SearchByNameResult from "./components/SearchByNameResult";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useAtom } from "jotai";
import state from "./components/AtomStates";
import MyProfile from "./components/MyProfile";

function App() {
  const [showMyProfile] = useAtom(state.showMyProfile);

  return (
    <div className="App">
      <Navbar />
      {showMyProfile ? (
        <MyProfile />
      ) : (
        <div>
          <SearchByNameResult />
          <ProductDetails />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
