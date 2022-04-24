import React, { useState } from "react";
import "./Marketplace.css";
import { MarketPlaceCardObject } from "./MarketPlaceCardObject";
import { MarketplaceItemsCard } from "../../Components/MarketplaceItemsCard/MarketplaceItemsCard";
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
            <div className="box_content mb-3 mb-md-5 p-3 p-md-5">
              <h2 className="title_secondary font_32">
                Welcome to the MooMonster Marketplace
              </h2>
              <p className="text-center text-white family_bunny">
                Here you can search and buy Moo to enrich your collection.
              </p>
              <div className="box_content_body flex-wrap flex-md-nowrap flex-column flex-md-row align-items-center d-flex justify-content-between">
                <div className="box text-white text-center">
                  <strong className="d-block box_title">Total NFT</strong>
                  <span className="text_secondary mt-n3 font-weight-bold box_subtitle">
                    29,096
                  </span>
                </div>
                <div className="box flex-grow-1 text-white text-center">
                  <strong className="d-block box_title">
                    NFT trading Volume
                  </strong>
                  <span className="text_secondary mt-n3 font-weight-bold box_subtitle">
                    $0
                  </span>
                </div>
                <div className="box text-white text-center">
                  <strong className="d-block box_title">
                    <img
                      style={{ height: "24px" }}
                      src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                      alt="img"
                    />
                  </strong>
                  <span className="text_secondary mt-n3 font-weight-bold box_subtitle">
                    $0.0000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MarketplaceItems></MarketplaceItems>
    </div>
  );
};

const MarketplaceItems = () => {
  //console.log(MarketPlaceCardObject)
  return (
    <div id="MarketplaceItems">
      <div className="container">
        <div className="row">
          <div className="col-12 d-lg-flex">
            <MarketPlaceFilter></MarketPlaceFilter>
            <div className="items_wrapper mb-3 mb-md-5">
              <div className="items_head mb-3 mb-md-5">
                <div className="items_control d-flex flex-wrap justify-content-between">
                  <div className="items_title mb-3">
                    <img
                      style={{ height: "2.5em" }}
                      className="me-3"
                      src={require("../../Static/img/icon-item.024ae4c.png")}
                      alt="img"
                    />{" "}
                    <span className="text_secondary">
                      254 Moo - Floor $5.00
                    </span>
                  </div>
                  <div className="items_filter mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="text-white family_bunny small">
                        Sort by
                      </span>
                      <div className="filter_group ms-3">
                        <select className="select_filter" name="" id="">
                          <option value="Price (low-high)">
                            Price (low-high)
                          </option>
                          <option value="Price (high-low)">
                            Price (high-low)
                          </option>
                          <option value="Date (new-old)">Date (new-old)</option>
                          <option value="Date (old-new)">Date (old-new)</option>
                          <option value="Token ID (low-high)">
                            Token ID (low-high)
                          </option>
                          <option value="Token ID (high-low)">
                            Token ID (high-low)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items_body">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="row g-2 justify-content-center justify-content-md-start">
                      {MarketPlaceCardObject.map((v) => {
                        return (
                          <div
                            className="col-sm-6 col-md-4 col-lg-4 col-xxl-3 "
                            key={v.id}
                          >
                            <div className="col_wrapper">
                              <MarketplaceItemsCard
                                head_img={v.head_img}
                                head_full_img={v.head_full_img}
                                head_content_img={v.head_content_img}
                                head_border={v.head_border}
                                Lv={v.Lv}
                                head_top_svg={v.head_top_svg}
                                rating_svg={v.rating_svg}
                                name={v.name}
                                card_token={v.card_token}
                                busd={v.busd}
                                count_value={v.count_value}
                              ></MarketplaceItemsCard>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-12 pt-5 pb-3">
                    <nav aria-label="navigation ">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a
                            className="page-link paginate_control me-2 text-white prev_disable"
                            href="#"
                          >
                            <i className="fas fa-arrow-left    "></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link me-2 text-white active_link"
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link me-2 text-white" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link me-2 text-white" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link me-2 text-white" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link me-2 text-white" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link paginate_control active_link text-white"
                            href="#"
                          >
                            <i className="fas fa-arrow-right    "></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketPlaceFilter = () => {
  // show nft filter
  const [showNft, setShowNft] = useState(false);
  //console.log(showNft)

  // moo show filter
  const [mooShow, setMooShow] = useState(false);

  // busd show filter
  const [busdShow, setBusdShow] = useState(false);

  return (
    <div id="MarketPlaceFilter" className="me-4">
      <div className="filter_wrapper">
        <div className="filter_head">
          <h2 className="title_secondary font_32 text-start">Filters</h2>

          <div className="form-group">
            <input
              type="checkbox"
              className="d-none"
              name="show_nft"
              id="show_nft"
              onChange={() => setShowNft(!showNft)}
            />
            <label htmlFor="show_nft" className="toggle_label family_bunny">
              Show only my NFTs on sell
            </label>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Currency</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="d-flex align-items-center flex-wrap">
            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="mooShow"
                id="mooShow"
                onChange={() => setMooShow(!mooShow)}
              />
              <label htmlFor="mooShow" className="toggle_label family_bunny">
                <img
                  style={{ height: "15px" }}
                  src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                  alt=""
                />{" "}
                MOO
              </label>
            </div>

            <div className="form-group mt-2">
              <input
                type="checkbox"
                className="d-none"
                name="busdShow"  defaultChecked={!busdShow}
                id="busdShow"
                onChange={() => setBusdShow(!busdShow)}
              />
              <label htmlFor="busdShow" className="toggle_label family_bunny">
                <img
                  style={{ height: "15px" }}
                  src={require("../../Static/img/ic-busd-token.454c7c3.png")}
                  alt=""
                />{" "}
                BUSD
              </label>
            </div>

            
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">NFT</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

        </div>
        <div className="filter_body"></div>
        <div className="filter_foot"></div>
      </div>
    </div>
  );
};
