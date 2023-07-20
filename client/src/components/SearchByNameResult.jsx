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

  function outColor(e){

    setTimeout(() => {
      e.target.style.backgroundColor = "rgba(0,0,0,0)";
      e.target.style.transition = "all 3s";
    }, 1000)

  }

  function overColor(e){
    e.target.style.backgroundColor = "rgba(248, 244, 244, 0.7)";
    e.target.style.transition = "all 1.3s";
  }

  function focusColor(e){
    e.target.style.border = "3px solid navy";
    e.target.style.transition = "all 1s";
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
            onClick={(e) =>
              {
                searchByBarcode(false, setSearchNames, setProduct, item.fdcId)
                // focusColor(e)
              }
            }
            onMouseOver={(e) => overColor(e)}
            onMouseOut={(e) => outColor(e)}

          >
            {index + 1}.{item["description"]}
          </div>
        ))}
      </div>
    )
  );
}
