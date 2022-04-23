import React, { useState } from "react";
import "./EggSell.css";

function EggSell(props) {
  const [amountCount, setAmountCount] = useState(1);
  return (
    <div id="EggSell" className="mb-3 mb-md-5">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 py-3 py-md-5">
              <div className="row justify-content-center align-items-center">
                <div className="pe-lg-5 d-flex d-lg-block justify-content-center col-lg-auto">
                  <div className="egg_img_wrapper mx-auto">
                    <img
                      src={require("../../Static/img/egg-white-card.693b99f.png")}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="content-section mt-4 mt-lg-0 col">
                  <h2 className="text_secondary font_4 family_bunny text-center mb-3 mb-md-4">
                    Moo Monster Stone Eggs
                  </h2>

                  <ul className="list-unstyled">
                    <li>
                      <span className="text-white">Amount</span>
                      <ol className="list-unstyled d-flex justify-content-center amount_action_wrapper">
                        <li>
                          <button
                            onClick={() => setAmountCount(1)}
                            className={`me-4 ${
                              amountCount === 1 ? "active_number" : ""
                            }`}
                          >
                            1
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setAmountCount(2)}
                            className={`me-4 ${
                              amountCount === 2 ? "active_number" : ""
                            }`}
                          >
                            2
                          </button>
                        </li>
                        <li>
                          <button
                            className={`${
                              amountCount === 3 ? "active_number" : ""
                            }`}
                            onClick={() => setAmountCount(3)}
                          >
                            3
                          </button>
                        </li>
                      </ol>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-white">Amount</span>
                        <b
                          style={{ fontSize: "1.5em" }}
                          className="text_secondary ms-2 d-inline-block"
                        >
                          {amountCount}
                        </b>
                      </div>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-white">Total Price</span>
                        <b
                          style={{ fontSize: "1.5em" }}
                          className="text_secondary ms-2 d-inline-block"
                        >
                          <img
                            src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                            alt="img"
                            style={{ height: "2.7rem" }}
                          />{" "}
                          0.000 MOO
                        </b>
                      </div>
                    </li>

                    <li>
                      <button className="btn_secondary border-0 outline-0 w-100 py-3 py-lg-4">
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EggSell;
