import "./Journey.scss";

import Navbar from "../../components/Navbar/Navbar";

export default function Journey() {
  return (
    <>
      <Navbar page="journey" />
      <div className="journey">
        <div className="imgDiv">
          <h1 className="heading">THE JOURNEY</h1>
        </div>
        <div className="timeline">
          <div className="logo_container">
            <img className="logo" src="/images/logoW.png" alt="logo" />
          </div>
          <div className="content">
          <img className="linedot" src="/images/dots.png" alt="dots" />
            <span>
              <h1>THE ROOTS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sit corrupti impedit officia totam, consequuntur,
                facere natus ratione laborum, aspernatur incidunt voluptas?
                Natus deserunt quis magni culpa alias architecto. Atque?
              </p>
            </span>
            <span>
              <h1>CHAPTER I</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sit corrupti impedit officia totam, consequuntur,
                facere natus ratione laborum, aspernatur incidunt voluptas?
                Natus deserunt quis magni culpa alias architecto. Atque?
              </p>
            </span>
            <span>
              <h1>CHAPTER II</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sit corrupti impedit officia totam, consequuntur,
                facere natus ratione laborum, aspernatur incidunt voluptas?
                Natus deserunt quis magni culpa alias architecto. Atque?
              </p>
            </span>
            <span>
              <h1>KISCKSUP</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sit corrupti impedit officia totam, consequuntur,
                facere natus ratione laborum, aspernatur incidunt voluptas?
                Natus deserunt quis magni culpa alias architecto. Atque?
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
