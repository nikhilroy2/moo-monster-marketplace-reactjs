import React from "react";
import "./Staking.css";
function Staking(props) {
  return (
    <div id="Staking">
      <section>
        <StakingBox></StakingBox>
      </section>
    </div>
  );
}
export default Staking;

const StakingBox = () => {
  return (
    <div id="StakingBox">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box_content mb-3 mb-md-5 p-3 p-md-5">
              <h2 className="title_secondary text-start font_32">
                MooMonster Staking
              </h2>
              <p className=" text-white family_bunny">
                Stake MOO to earn MOO Token, NFT, ETC.
              </p>
              <div className="box_content_body py-3 flex-wrap flex-md-nowrap flex-column flex-md-row align-items-center d-flex ">
                <div className="box text-white me-md-4 ">
                  <strong className="d-block box_title">Total NFT</strong>
                  <span className="text_secondary mt-n3 font-weight-bold box_subtitle">
                    0%
                  </span>
                </div>
                <div className="box text-white me-md-4 ">
                  <strong className="d-block box_title">Highest APR</strong>
                  <span className="text-success mt-n3 font-weight-bold box_subtitle">
                    0%
                  </span>
                </div>

                <div className="box text-white  ">
                  <strong className="d-block box_title">MOO Price</strong>
                  <span className="text_secondary mt-n3 font-weight-bold box_subtitle">
                    $0.0000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RewardSummary></RewardSummary>
    </div>
  );
};

const RewardSummary = () => {
  return (
    <div id="RewardSummary" className="mb-3 mb-md-5 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="text-white family_bunny">Your reward summary</span>
            <div className="content_wrapper">
              <div className="row">
                <div className="col-md-7 mb-4 mb-md-0">
                  <div className="summary_img_box text-center py-5 text-white">
                    <span className="family_bunny">MOO Earned:</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <span className="text_secondary family_bunny" style={{fontSize: '2em'}}>
                      0.0000 MOO
                    </span>
                    <br />
                    <span className="text-white-50 family_bunny">
                      (~$0.000)
                    </span>
                  </div>
                </div>
                <div className="col-md-5 mt-3 mt-md-0 mb-4 mb-md-0 ">
                  <div className="summary_content">
                    <ul className="list-unstyled text-center">
                      <li className="mb-3">
                        <p className="text-white pb-0 mb-0 family_bunny">
                          Your MOO wallet balance:
                        </p>
                        <strong className="text_secondary family_bunny font-weight-normal ">
                          0.0000 MOO
                        </strong>
                      </li>

                      <li className="mb-3">
                        <p className="text-white pb-0 mb-0 family_bunny">
                          Available reward to claim:
                        </p>
                        <strong
                          className="text_secondary family_bunny font-weight-normal"
                          style={{ fontSize: "2em" }}
                        >
                          0.0000 MOO
                        </strong>
                      </li>

                      <li>
                        <p className="text-white pb-0 mb-0 family_bunny">
                          Total reward locked:
                        </p>
                        <strong className="text_secondary family_bunny font-weight-normal ">
                          0.0000 MOO
                        </strong>
                        <br />
                        <small style={{ color: "#5b89a7" }}>
                          ( reward unlocked over NaN days )
                        </small>
                      </li>
                    </ul>
                    <button className="w-100 connect_btn btn_primary p-3 py-md-4 border-0 outline-0">
                      Connect Wallet
                    </button>
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
