import { useEffect, useState } from "react";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
    return () => {
      console.log("clean!");
    };
  }, [checked]);
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      ></input>
      <label htmlFor="checkbox">Show only Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
