import React from "react";
import "./BuyMooModal.css";
function BuyMooModal(props) {
  const buyMooAction = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div id="BuyMooModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="buy_moo_open_modal"
        tabIndex={-1}
        aria-labelledby="buy_moo_open_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text_secondary family_bunny"
                id="exampleModalLabel"
              >
                Buy $MOO Token
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <i className="fas fa-times text-white   "></i>{" "}
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled modal_list d-flex flex-wrap justify-content-between">
                <li className="mb-3 w-100">
                  <button
                    onClick={() =>
                      buyMooAction(
                        "https://www.wardenswap.finance/#/best-rate-swap?network=bsc&to=0xa29b6f4e762874846c081e20ed1142ff83faafef"
                      )
                    }
                  >
                    Biswap{" "}
                    <b className="text_secondary">( Lowest Trading Fee )</b>
                    <img
                      className="ms-4 d-inline-block"
                      src={require("../../Static/img/ic-biswap.7a70a8b.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3 w-50 pe-2">
                  <button
                    onClick={() => {
                      buyMooAction("https://www.gate.io/trade/MOO_USDT");
                    }}
                  >
                    Gate.io
                    <img
                      className="ms-4 d-inline-block"
                      src={require("../../Static/img/ic-gateio.2e4c984.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3 w-50 ps-2">
                  <button
                    onClick={() => {
                      buyMooAction(
                        "https://pancakeswap.finance/swap?outputCurrency=0xa29b6f4e762874846c081e20ed1142ff83faafef&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56"
                      );
                    }}
                  >
                    PancakeSwap
                    <img
                      className="ms-4 d-inline-block"
                      src={require("../../Static/img/ic-pancake-swap.e1d4dec.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3 w-50 pe-2">
                  <button
                    onClick={() => {
                      buyMooAction(
                        "https://swap.arken.finance/tokens/bsc/0xa29b6f4e762874846c081e20ed1142ff83faafef"
                      );
                    }}
                  >
                    Arken
                    <img
                      className="ms-4 d-inline-block"
                      src={require("../../Static/img/ic-arken.bbdfee7.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3 w-50 ps-2">
                  <button
                    onClick={() => {
                      buyMooAction(
                        "https://www.wardenswap.finance/#/best-rate-swap?network=bsc&to=0xa29b6f4e762874846c081e20ed1142ff83faafef"
                      );
                    }}
                  >
                    WardenSwap
                    <img
                      className="ms-4 d-inline-block"
                      src={require("../../Static/img/ic-warden-swap.24bb3e3.png")}
                      alt="img"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyMooModal;
