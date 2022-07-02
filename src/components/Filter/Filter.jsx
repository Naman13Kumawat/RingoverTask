import { useState } from "react";
import { products } from "../../data/shoes.js";
import { useProduct } from "../../hooks/useProduct";
import "./Filter.scss";

export default function Filter() {
  const { filteredProducts, setFilteredProducts } = useProduct();
  const [filtersValues, setfiltersValues] = useState([]);
  const [temArr, setTA] = useState([]);

  const handleClick = (e) => {
    const name = e.target.name;
    const id = Number(e.target.id);

    const currentIndex = filtersValues.indexOf(id);
    const newChecked = [...filtersValues];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setfiltersValues(newChecked);

    if (name === "type") {
      setTA(filteredProducts.filter((product) => product.type === id));
    }
  };

  const handleSubmit = (e) => {
    console.log(filtersValues);
    if (filtersValues.length !== 0) {
      setFilteredProducts(temArr);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="filter">
      <span className="heading">
        <h1>FILTERS</h1>
        <img className="filterImg" src="/images/filter.png" alt="filter" />
      </span>
      <div className="responsiveDiv">
        <span className="cost">
          <h2>Cost</h2>
          <label>
            <input
              type="checkbox"
              id={1}
              name="costCat"
              onClick={handleClick}
            />
            &nbsp; Rs. 1500-4000
          </label>
          <label>
            <input
              type="checkbox"
              id={2}
              name="costCat"
              onClick={handleClick}
            />
            &nbsp; Rs. 4001-7000
          </label>
          <label>
            <input
              type="checkbox"
              id={3}
              name="costCat"
              onClick={handleClick}
            />
            &nbsp; Rs. 7001+
          </label>
        </span>
        <span className="color">
          <h2>Color</h2>
          <div className="color_box">
            <label className="container">
              <input type="checkbox" id="red" />
              <span className="colorProps red"></span>
            </label>
            <label className="container">
              <input type="checkbox" id="blue" />
              <span className="colorProps blue"></span>
            </label>
            <label className="container">
              <input type="checkbox" id="yellow" />
              <span className="colorProps yellow"></span>
            </label>
            <label className="container">
              <input type="checkbox" id="green" />
              <span className="colorProps green"></span>
            </label>
            <label className="container">
              <input type="checkbox" id="gold" />
              <span className="colorProps gold"></span>
            </label>
          </div>
        </span>
        <span className="design">
          <h2>Design Template</h2>
          <label>
            <input type="checkbox" id="two" />
            &nbsp;2
          </label>
          <label>
            <input type="checkbox" id="three" />
            &nbsp;3
          </label>
          <label>
            <input type="checkbox" id="more" />
            &nbsp;3+
          </label>
        </span>
        <span className="type">
          <h2>Type</h2>
          <label>
            <input type="checkbox" id={11} name="type" onClick={handleClick} />
            &nbsp;Loafers
          </label>
          <label>
            <input type="checkbox" id={12} name="type" onClick={handleClick} />
            &nbsp;Sneakers
          </label>
        </span>
      </div>
      <button className="btn" onClick={handleSubmit}>
        Apply
      </button>
    </div>
  );
}
