import { useAtom } from "jotai";
import state from "./AtomStates";
import DoughnutChart from "./DoughnutChart";
import { addingProduct } from "./Utils"

export default function ProductDetails() {
  const [product] = useAtom(state.product);
  const [user] = useAtom(state.user)

  return (
    product &&
    (product !== "Product Not Found" ? (
      <div className="product-chart">
        <div className="name-chart">
          <h1>{product.name}</h1>
          <DoughnutChart nutriments={product.nutriments} />
        </div>
        <div className="product-table-container">
          <div className="product-table">
            <ul>
              <li style={{ color: "rgb(255, 151, 48)" }}>Carbohydrates</li>
              <li style={{ color: "rgb(94, 87, 81)" }}>Fat</li>
              <li style={{ color: "#003aed" }}>Proteins</li>
              <li style={{ color: "#019300" }}>Fiber</li>
              <li style={{ color: "#f74bd7" }}>Sugars</li>
            </ul>
          </div>
          <div className="product-table-values">
            <ul>
              <li style={{ color: "rgb(255, 151, 48)" }}>
                {product.nutriments.carbohydrates} g
              </li>
              <li style={{ color: "rgb(94, 87, 81)" }}>
                {product.nutriments.fat} g
              </li>
              <li style={{ color: "#003aed" }}>
                {product.nutriments.proteins} g
              </li>
              <li style={{ color: "#019300" }}>{product.nutriments.fiber} g</li>
              <li style={{ color: "#f74bd7" }}>
                {product.nutriments.sugars} g
              </li>
            </ul>
          </div>
        </div>
        <button className="add-button" onClick={() => addingProduct(product, user.email)}>
          Add
        </button>
      </div>
    ) : (
      <h1>{product}</h1>
    ))
  );
}
