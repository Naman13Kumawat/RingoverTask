import "./Shoes.scss";
import { products } from "../../data/shoes.js";
import ProductCard from "../ProductCard/ProductCard";
import { useProduct } from "../../hooks/useProduct";

export default function Store() {
  const { filteredProducts, setFilteredProducts } = useProduct();

  const handleClick = () => {
    setFilteredProducts([]);
  };
  return (
    <div className="store">
      <span className="heading">
        <h1>SHOES</h1>
        <img className="searchImg" src="/images/search.png" alt="search" />
        <button className="btn">Sort by</button>
      </span>
      <div className="product_container">
        {products.length === 0
          ? <p>No results.</p>
          : products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                component={true}
              />
            ))}
      </div>
    </div>
  );
}
