import React from "react";
import "./Marketplace.css";
function Marketplace(props) {
  return (
    <div id="Marketplace">
      <section>
        <MarketplaceBox></MarketplaceBox>
      </section>
    </div>
  );
}

export default Marketplace;

const MarketplaceBox = () => {
  return (
    <div id="MarketplaceBox">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box_content">
              <h2 className="title_secondary font_2">
                Welcome to the MooMonster Marketplace
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
