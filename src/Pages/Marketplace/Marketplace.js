import React, { useState } from "react";
import "./Marketplace.css";
import { MarketPlaceCardObject } from "./MarketPlaceCardObject";
import { MarketplaceItemsCard } from "../../Components/MarketplaceItemsCard/MarketplaceItemsCard";

import ReactStars from "react-rating-stars-component";

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
    <div id="MarketplaceItems" className="mb-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 d-lg-flex">
            <MarketPlaceFilter></MarketPlaceFilter>
            <div className="items_wrapper mt-5 mt-lg-0 mb-3 mb-md-5">
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

  const ratingChanged = (data) => console.log(data);
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
                name="busdShow"
                defaultChecked={!busdShow}
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

          <div className="d-flex flex-wrap mt-4">
            <div className="nft_sm_box active_box me-2">
              <img src={require("../../Static/img/nft_icon.png")} alt="img" />
              <span>Moo</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/egg_icon.png")} alt="img" />
              <span>Egg</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/card_icon.png")} alt="img" />
              <span>Card</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/card_icon.png")} alt="img" />
              <span>Card Pack</span>
            </div>

            <div className="nft_sm_box  ">
              <img src={require("../../Static/img/ticket.png")} alt="img" />
              <span>Ticket</span>
            </div>
          </div>
        </div>
        <div className="filter_body">
          <div className="d-flex flex-wrap">
            <div className="nft_sm_box ">
              <img src={require("../../Static/img/jigsaw.png")} alt="img" />
              <span>Jigsaw</span>
            </div>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Element</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="d-flex flex-wrap mt-4">
            <div className="nft_sm_box active_box me-2">
              <img
                style={{
                  background: "linear-gradient(180deg,#3d2f29,#855f36)",
                }}
                src={require("../../Static/img/icon-element-earth.d05d1b5.png")}
                alt="img"
              />
              <span>Earth</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img
                style={{
                  background: "linear-gradient(180deg,#150cd4,#01b5fe)",
                }}
                src={require("../../Static/img/icon-element-water.39e8cd3.png")}
                alt="img"
              />
              <span>Water</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img
                style={{
                  background: "linear-gradient(180deg,#ff1c1c,#ee900d)",
                }}
                src={require("../../Static/img/icon-element-fire.77b8610.png")}
                alt="img"
              />
              <span>Fire</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img
                style={{
                  background: "linear-gradient(180deg,#ffa325,#f4d90b)",
                }}
                src={require("../../Static/img/icon-element-light.30f51a2.png")}
                alt="img"
              />
              <span>Light</span>
            </div>

            <div className="nft_sm_box  ">
              <img
                style={{
                  background: "linear-gradient(180deg,#070014,#440090)",
                }}
                src={require("../../Static/img/icon-element-dark.85fdcd1.png")}
                alt="img"
              />
              <span>Dark</span>
            </div>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Character</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="d-flex flex-wrap mt-4">
            <div className="nft_sm_box active_box me-2">
              <img src={require("../../Static/img/1.e6f0131.png")} alt="img" />
              <span>D-Bolt</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/1.04dc6c6.png")} alt="img" />
              <span>Lava</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/1.06e4af1.png")} alt="img" />
              <span>Richie</span>
            </div>

            <div className="nft_sm_box  me-2">
              <img src={require("../../Static/img/1.84b2eb4.png")} alt="img" />
              <span>Varlo</span>
            </div>

            <div className="nft_sm_box  ">
              <img src={require("../../Static/img/1.5d38825.png")} alt="img" />
              <span>Relias</span>
            </div>

            <div className="nft_sm_box  me-2 ">
              <img src={require("../../Static/img/1.a5572b9.png")} alt="img" />
              <span>Freezy</span>
            </div>

            <div className="nft_sm_box  ">
              <img src={require("../../Static/img/1.696104b.png")} alt="img" />
              <span>Ace</span>
            </div>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Evolution Tier</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="d-flex align-items-center flex-wrap">
            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Baby_I"
                id="Baby_I"
              />
              <label htmlFor="Baby_I" className="toggle_label family_bunny">
                Baby I
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Baby_II"
                id="Baby_II"
              />
              <label htmlFor="Baby_II" className="toggle_label family_bunny">
                Baby II
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Rookie"
                id="Rookie"
              />
              <label htmlFor="Rookie" className="toggle_label family_bunny">
                Rookie
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Champion"
                id="Champion"
              />
              <label htmlFor="Champion" className="toggle_label family_bunny">
                Champion
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Ultimate"
                id="Ultimate"
              />
              <label htmlFor="Ultimate" className="toggle_label family_bunny">
                Ultimate
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input type="checkbox" className="d-none" name="Mega" id="Mega" />
              <label htmlFor="Mega" className="toggle_label family_bunny">
                Mega
              </label>
            </div>

            <div className="form-group mt-2 me-4">
              <input
                type="checkbox"
                className="d-none"
                name="Heroic"
                id="Heroic"
              />
              <label htmlFor="Heroic" className="toggle_label family_bunny">
                Heroic
              </label>
            </div>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Character Stats</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Rarity</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="form-group mt-2">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>

          <div className="form-group mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white">Price Range</span>
              <button className="clear_btn">clear</button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-group mt-4">
              <input
                type="text"
                placeholder="From"
                className="form-control custom_input sm_input"
              />
            </div>
            <span className="text_9a mt-4">-</span>
            <div className="form-group mt-4">
              <input
                type="text"
                placeholder="To"
                className="form-control custom_input sm_input"
              />
            </div>
          </div>
        </div>
        <div className="filter_foot pb-5">
          <div className="form-group mt-4 position-relative">
            <i
              className="fas fa-search  position-absolute  text_9a "
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
              }}
            ></i>
            <input
              type="text"
              placeholder="Search by token ID"
              className="form-control custom_input ps-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
