import "./Shoes.scss";
import { products } from "../../data/shoes.js";
import ProductCard from "../ProductCard/ProductCard"

export default function Store() {
  return (
    <div className="store">
      <span className="heading">
        <h1>SHOES</h1>
        <img className="searchImg" src="/images/search.png" alt="search" />
        <button className="btn">Sort by</button>
      </span>
      <div className="product_container">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} component={true}/>;
      })}
      </div>
    </div>
  );
}
