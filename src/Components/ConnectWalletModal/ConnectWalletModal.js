import React from "react";
import "./ConnectWalletModal.css";

function ConnectWalletModal(props) {
  return (
    <div id="ConnectWalletModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="wallet_open_modal"
        tabIndex={-1}
        aria-labelledby="wallet_open_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text_secondary family_bunny"
                id="exampleModalLabel"
              >
                Connect to a wallet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              />{" "}
              <i className="fas fa-times text-white   "></i>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled wallet_list">
                <li className="mb-3">
                  <button>
                    Metamask
                    <img
                      className="ms-3 d-inline-block"
                      src={require("../../Static/img/icon-metamask.774febd.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3">
                  <button>
                    Coinbase Wallet
                    <img
                      className="ms-3 d-inline-block"
                      src={require("../../Static/img/icon-coinbase.3cbec38.png")}
                      alt="img"
                    />
                  </button>
                </li>

                <li className="mb-3">
                  <button>
                    WalletConnect
                    <img
                      className="ms-3 d-inline-block"
                      src={require("../../Static/img/icon-walletconnect.dfa25e4.svg").default}
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

export default ConnectWalletModal;
