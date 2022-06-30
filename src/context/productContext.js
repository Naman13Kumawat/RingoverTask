import { useState, createContext } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productId, setPID] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ProductContext.Provider value={{productId, setPID, cartProducts, setCartProducts}}>
      {children}
    </ProductContext.Provider>
  );
}
