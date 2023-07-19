import { useAtom } from "jotai";
import state from "./AtomStates";
import { searchByBarcode } from "./Utils";

export default function SearchByNameResult() {
  const [searchNames, setSearchNames] = useAtom(state.searchNames);
  const [product, setProduct] = useAtom(state.product);

  function moveAside(e){
    e.target.classList.remove("list-container");
    e.target.classList.remove("list-container-aside");
    e.target.classList.add("list-container-aside");
  }

  // const showDetails = () => 
  // {
  //   document.getElementsByClassName("product-chart").style.opacity = 0;
  //   setTimeout(() => {
  //     document.getElementsByClassName("product-chart").style.opacity = 1;
  //     document.getElementsByClassName("product-chart").style.transitoin = "all 1s";
  //   }, 1000);
  // }

  return (
    searchNames && (
      <div className="list-container" onMouseOver={(e) => moveAside(e)}>
        {searchNames.map((item, index) => (
          <div
            className="product-names"
            key={index}
            onClick={() =>
              {
                searchByBarcode(false, setSearchNames, setProduct, item.fdcId)
                // showDetails();
              }
            }
          >
            {index + 1}.{item["description"]}
          </div>
        ))}
      </div>
    )
  );
}
