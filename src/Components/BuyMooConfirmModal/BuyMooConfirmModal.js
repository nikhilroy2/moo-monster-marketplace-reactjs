import React from "react";
import "./BuyMooConfirmModal.css";
function BuyMooConfirmModal(props) {
  return (
    <div id="BuyMooConfirmModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="buy_moo_confirm"
        tabIndex={-1}
        aria-labelledby="buy_moo_confirm"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text_secondary family_bunny"
                id="exampleModalLabel"
              >
                Buy Moo #24678
              </h5>
            </div>
            <div className="modal-body text-white p-5">
              <p>Are you sure you want to buy Moo #24678.</p>
              <ul className="list-unstyled mt-3">
                <li className="mb-3">
                  <span style={{ fontSize: ".875em" }}>Price</span>
                  <div className="price_box">
                    {" "}
                    <span className="text_secondary me-3 h2 font-weight-bold">
                      5.20 BUSD
                    </span>
                    <span
                      className="text_9a font-weight-bold"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      ~5.20 USD
                    </span>
                  </div>
                </li>

                <li className="d-flex mb-3 justify-content-between align-items-center">
                  <span style={{ fontSize: ".875em" }} className="text_9a">
                    Your balance:
                  </span>
                  <b style={{ color: "#e86161", fontSize: ".875em" }}>
                    0.00 BUSD
                  </b>
                </li>

                <li className="d-flex mb-3 justify-content-between align-items-center">
                  <span style={{ fontSize: ".875em" }} className="text_9a">
                    Total Price:
                  </span>
                  <b style={{ fontSize: ".875em" }}>5.20 BUSD</b>
                </li>
              </ul>

              <div className="modal_control">
                <button data-mdb-dismiss="modal" className="mx-2 btn_cancel">Cancel</button>
                <button className="mx-2 btn_approve disabled">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyMooConfirmModal;
