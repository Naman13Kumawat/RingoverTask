import "./ProductCard.scss";

function ButtonModal() {
  return (
    <div className="btn_container">
      <button>
        <img src="/images/bag.png" className="addBtn" alt="addtocart" />
      </button>
    </div>
  );
}

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img className="productImg" src={product.img} alt={product.title} />
      <h1>{product.title}</h1>
      <span className="desc">
        <p>Rs. {product.price}/-</p>
        <p>Rating: {product.rating}</p>
      </span>
      <ButtonModal />
    </div>
  );
}
