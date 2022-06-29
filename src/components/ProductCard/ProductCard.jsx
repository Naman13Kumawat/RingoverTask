import "./ProductCard.scss";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img className="productImg" src={product.img} alt={product.title} />
      <h1>{product.title}</h1>
      <span className="desc">
        <p>Rs. {product.price}/-</p>
        <p>Rating: {product.rating}</p>
      </span>
      <button className="btn">Add to Cart</button>
    </div>
  );
}
