import { useState } from "react";
import "./App.css";
import Products from "./components/Products";

function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

export default AppProducts;
