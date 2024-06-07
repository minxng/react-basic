import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((e) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
    return () => {
      console.log("clean!");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
