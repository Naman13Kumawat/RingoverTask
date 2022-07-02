import "./Store.scss";

import Navbar from "../../components/Navbar/Navbar";
import Shoes from "../../components/Shoes/Shoes";
import Filter from "../../components/Filter/Filter";
import Cart from "../../components/Cart/Cart";
import { ProductProvider } from "../../context/productContext";

export default function Store() {
  return (
    <>
      <Navbar page={"store"} />
      <div className="store_container">
        <ProductProvider>
          <Filter />
          <div className="responseDiv">
            <Shoes />
            <Cart />
          </div>
        </ProductProvider>
      </div>
    </>
  );
}
