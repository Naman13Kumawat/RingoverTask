import "./Filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <span className="heading">
        <h1>FILTERS</h1>
        <img className="filterImg" src="/images/filter.png" alt="filter" />
      </span>
      <span className="cost">
        <h2>Cost</h2>
        <label>
          <input type="checkbox" id="low" />
          &nbsp; Rs. 1500-4000
        </label>
        <label>
          <input type="checkbox" id="med" />
          &nbsp; Rs. 4001-7000
        </label>
        <label>
          <input type="checkbox" id="med" />
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
          <input type="checkbox" id="loafers" />&nbsp;Loafers
        </label>
        <label>
          <input type="checkbox" id="Sneakers" />&nbsp;Sneakers
        </label>
      </span>
      <button className="btn">Apply</button>
    </div>
  );
}
