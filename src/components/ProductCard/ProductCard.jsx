import "./ProductCard.scss";
import { useProduct } from "../../hooks/useProduct.js";
import { products } from "../../data/shoes.js";

function ButtonModal({ id, cartProducts, setCartProducts }) {
  const handleClick = () => {
    const foundProduct = products.filter(
      (product) => product._id === id
    );
    if (foundProduct[0]) {
      setCartProducts([...cartProducts, foundProduct[0]]);
    }
  };
  return (
    <div className="btn_container" onClick={handleClick}>
      <button>
        <img src="/images/bag.png" className="addBtn" alt="addtocart" />
      </button>
    </div>
  );
}

export default function ProductCard({ product, component }) {
  const { cartProducts, setCartProducts } = useProduct();
  return (
    <div className="product">
      <img className="productImg" src={product.img} alt={product.title} />
      <h1>{product.title}</h1>
      <span className="desc">
        <p>Rs. {product.price}/-</p>
        <p>Rating: {product.rating}</p>
      </span>
      {component ? <ButtonModal id={product._id} cartProducts={cartProducts} setCartProducts={setCartProducts} /> : null}
    </div>
  );
}
