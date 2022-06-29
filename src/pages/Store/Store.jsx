import "./Store.scss";

import Navbar from "../../components/Navbar/Navbar";
import Shoes from "../../components/Shoes/Shoes";
import Filter from "../../components/Filter/Filter";
import Cart from "../../components/Cart/Cart"

export default function Store() {
  return (
    <>
      <Navbar />
      <div className="store_container">
        <Filter />
        <Shoes />
        <Cart />
      </div>
    </>
  );
}
