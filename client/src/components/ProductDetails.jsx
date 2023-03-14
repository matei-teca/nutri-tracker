import { useAtom } from "jotai";
import state from "./AtomStates";
import DoughnutChart from "./DoughnutChart";

export default function ProductDetails() {
  const [product] = useAtom(state.product);
  return (
    product &&
    (product !== "Product Not Found" ? (
      <div className="product-details">
        <h1>{product.name}</h1>
        <DoughnutChart nutriments={product.nutriments} />
      </div>
    ) : (
      <div>
      </div>
    ))
  );
}
