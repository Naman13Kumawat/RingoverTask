import "./Cart.scss";

import ProductCard from "../ProductCard/ProductCard";
import { useProduct } from "../../hooks/useProduct";

export default function Cart() {
  const { cartProducts, setCartProducts } = useProduct();
  const clear = () => {
    if (window.confirm("Do you want to clear your cart?")) setCartProducts([]);
  };

  return (
    <div className="cart">
      <span className="heading">
        <h1>CART</h1>
        <div className="bagImg">
          <img src="/images/bag.png" alt="cartLogo" />
        </div>
      </span>
        {cartProducts.length === 0 ? null : (
          <p className="clear" onClick={clear}>
            Clear Cart
          </p>
        )}
      <span className="cart_products">
        {cartProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
        {cartProducts.length === 0 ? (
          <p>What's stopping you, designer?</p>
        ) : null}
      </span>
      <div className="addressDate">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 492 492"
            xmlSpace="preserve"
          >
            <g id="Layer_1">
              <path d="M240.8,427.2c-4.5-9.9-11.5-24.7-19.9-42.3c-32.5-68-85.1-178-85.1-212.1c0-30.5,12.4-58.1,32.3-78.1   c20-20,47.6-32.3,78.1-32.3c30.5,0,58.1,12.4,78.1,32.3c20,20,32.3,47.6,32.3,78.1c0,34.1-52.6,144.1-85.1,212.1   c-8.5,17.9-15.7,32.8-20.1,42.7l-5.2-2.3l5.3,2.4c-1.3,2.9-4.7,4.2-7.6,2.9C242.4,429.9,241.3,428.7,240.8,427.2L240.8,427.2z    M231.3,380c5.8,12.1,10.9,22.9,15,31.6c4.1-8.7,9.2-19.5,15-31.6c32-67,83.9-175.5,83.9-207.2c0-27.3-11.1-52-29-69.9   c-17.9-17.9-42.6-29-69.9-29c-27.3,0-52,11.1-69.9,29c-17.9,17.9-29,42.6-29,69.9C147.4,204.5,199.2,312.9,231.3,380z" />
              <path d="M246.3,114.1c16.2,0,30.9,6.6,41.5,17.2c10.6,10.6,17.2,25.3,17.2,41.5c0,16.2-6.6,30.9-17.2,41.5s-25.3,17.2-41.5,17.2   c-16.2,0-30.9-6.6-41.5-17.2c-10.6-10.6-17.2-25.3-17.2-41.5c0-16.2,6.6-30.9,17.2-41.5C215.4,120.7,230.1,114.1,246.3,114.1   L246.3,114.1z M279.6,139.5c-8.5-8.5-20.3-13.8-33.4-13.8c-13,0-24.8,5.3-33.4,13.8c-8.5,8.5-13.8,20.3-13.8,33.4   c0,13,5.3,24.8,13.8,33.4c8.5,8.5,20.3,13.8,33.4,13.8c13,0,24.8-5.3,33.4-13.8c8.5-8.5,13.8-20.3,13.8-33.4   C293.4,159.8,288.2,148,279.6,139.5z" />
            </g>
            <g id="Master_Layer_3"></g>
          </svg>
          Home
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 492 492"
            xmlSpace="preserve"
          >
            <g id="Layer_1">
              <rect
                x="172"
                y="236.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="234.1"
                y="236.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="296.2"
                y="236.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="358.3"
                y="236.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="110"
                y="294.6"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="172"
                y="294.6"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="234.1"
                y="294.6"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="296.2"
                y="294.6"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="110"
                y="353.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="172"
                y="353.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="234.1"
                y="353.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="296.2"
                y="353.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <rect
                x="358.3"
                y="353.1"
                className="st0"
                width="24.3"
                height="24.3"
              />
              <path d="M108.9,430.6c-12.3,0-23.4-5-31.5-13.1c-8.1-8.1-13.1-19.2-13.1-31.4V134c0-12.3,5-23.4,13.1-31.5   c8.1-8.1,19.2-13.1,31.5-13.1h274.7c12.3,0,23.4,5,31.5,13.1c8.1,8.1,13.1,19.2,13.1,31.5v252.3c0,12.1-5.3,23.3-13.7,31.4   c-8.4,8.2-19.9,13.3-32.1,13.3v0L108.9,430.6L108.9,430.6z M85.6,409.4c6,6,14.3,9.7,23.3,9.8l273.5,0.4v0c9.1,0,17.7-3.9,24.1-10   c6.2-6,10.1-14.3,10.1-23.2V134c0-9.1-3.7-17.3-9.7-23.3c-6-6-14.2-9.7-23.3-9.7H108.9c-9.1,0-17.3,3.7-23.3,9.7   c-6,6-9.7,14.2-9.7,23.3v252C75.9,395.1,79.6,403.4,85.6,409.4z" />
              <path d="M70.2,194.3c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8h352.2c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8H70.2z" />
              <path d="M146.1,68.2c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8v54.2c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8V68.2z" />
              <path d="M334.9,68.2c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8v54.2c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8V68.2z" />
              <path d="M341.7,308.3c-0.9-3.1,0.9-6.2,4-7.1c3.1-0.9,6.2,0.9,7.1,4l1.5,5.2l32.7-21.2c2.7-1.7,6.2-1,7.9,1.7   c1.7,2.7,1,6.2-1.7,7.9l-39,25.3c-0.5,0.4-1.2,0.7-1.8,0.9c-3.1,0.9-6.2-0.9-7.1-4L341.7,308.3z" />
            </g>
            <g id="Master_Layer_2"></g>
          </svg>
          <input type="date" name="date" />
          Select date
        </span>
      </div>
      <button
        className={`orderBtn ${
          cartProducts.length === 0 ? (
            null
          ) : "enabled"
        }`}
      >
        Order now
      </button>
    </div>
  );
}
