import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct() must be used inside a ProductProvider.");
  }

  return context;
};
