import React from "react";
import "./MooDetailsModal.css";
import { MarketplaceItemsCard } from "../MarketplaceItemsCard/MarketplaceItemsCard";
function MooDetailsModal({ set_card_token }) {
  return (
    <div id="MooDetailsModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="moo_details_modal_open"
        tabIndex={-1}
        aria-labelledby="moo_details_modal_open"
        aria-hidden={true}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text_secondary family_bunny"
                id="exampleModalLabel"
              >
                Moo details # 30868
              </h5>

              <div className="">
                <button title="Get shareable link" className="btn_share bg-transparent border-0 outline-0">
                  <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                    aria-label="share" id="copy-sharelink" xmlns="http://www.w3.org/2000/svg"
                    fill="#fff" className="bi-share modal-header-icon-button share-icon mr-3 b-icon bi"><g><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></g></svg>
                </button>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fas fa-times text-white   "></i>
                </button>

              </div>
            </div>
            <div className="modal-body">
              {/* ............Modal Body.............. */}
              {/* current item */}
              <div className="current_items">
                <MarketplaceItemsCard
                  head_img={require("../../Static/img/1.06e4af1.png")}
                  head_full_img={require("../../Static/img/sign-card-dark.5ea265a.png")}
                  head_content_img={require("../../Static/img/label-level-dark.3477e2a.png")}
                  head_border={'#3b2e4e'}
                  Lv={8}
                  head_top_svg={<>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.96"
                      height="5.88"
                      viewBox="0 0 11.96 5.88"
                    >
                      <path
                        d="M131.582,262.389l-1.328,4.467a.7.7,0,0,1-.671.5h-9.23a.705.705,0,0,1-.671-.909l1.328-4.467a.7.7,0,0,1,.671-.5h9.23A.7.7,0,0,1,131.582,262.389Z"
                        transform="translate(-119.651 -261.48)"
                        fill="#9bd2ff"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.96"
                      height="5.88"
                      viewBox="0 0 11.96 5.88"
                    >
                      <path
                        d="M131.582,262.389l-1.328,4.467a.7.7,0,0,1-.671.5h-9.23a.705.705,0,0,1-.671-.909l1.328-4.467a.7.7,0,0,1,.671-.5h9.23A.7.7,0,0,1,131.582,262.389Z"
                        transform="translate(-119.651 -261.48)"
                        fill="#111F2D"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.96"
                      height="5.88"
                      viewBox="0 0 11.96 5.88"
                    >
                      <path
                        d="M131.582,262.389l-1.328,4.467a.7.7,0,0,1-.671.5h-9.23a.705.705,0,0,1-.671-.909l1.328-4.467a.7.7,0,0,1,.671-.5h9.23A.7.7,0,0,1,131.582,262.389Z"
                        transform="translate(-119.651 -261.48)"
                        fill="#111F2D"
                      />
                    </svg>
                  </>}
                  rating_svg={<>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.999"
                      height={22}
                      viewBox="0 0 23.999 22"
                    >
                      <path
                        d="M12,0l4.2,6.59L24,8.4l-5.2,5.886L19.415,22,12,19.048,4.583,22,5.2,14.29,0,8.4,7.8,6.59Z"
                        fill="#FBEA35"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.999"
                      height={22}
                      viewBox="0 0 23.999 22"
                    >
                      <path
                        d="M12,0l4.2,6.59L24,8.4l-5.2,5.886L19.415,22,12,19.048,4.583,22,5.2,14.29,0,8.4,7.8,6.59Z"
                        fill="#FBEA35"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.999"
                      height={22}
                      viewBox="0 0 23.999 22"
                    >
                      <path
                        d="M12,0l4.2,6.59L24,8.4l-5.2,5.886L19.415,22,12,19.048,4.583,22,5.2,14.29,0,8.4,7.8,6.59Z"
                        fill="#13212F"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.999"
                      height={22}
                      viewBox="0 0 23.999 22"
                    >
                      <path
                        d="M12,0l4.2,6.59L24,8.4l-5.2,5.886L19.415,22,12,19.048,4.583,22,5.2,14.29,0,8.4,7.8,6.59Z"
                        fill="#13212F"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.999"
                      height={22}
                      viewBox="0 0 23.999 22"
                    >
                      <path
                        d="M12,0l4.2,6.59L24,8.4l-5.2,5.886L19.415,22,12,19.048,4.583,22,5.2,14.29,0,8.4,7.8,6.59Z"
                        fill="#13212F"
                      />
                    </svg>
                  </>}
                  name={'Baby Richie I'}
                  card_token="# 31614"
                  busd={'5.00 BUSD'}
                  count_value={'~$5.00'}
                ></MarketplaceItemsCard>
              </div>
              {/* item details */}

              <div className="item_details">
                <div className="details_head">
                  <h2 className="family_bunny h1 text_secondary">
                    Baby Varlo II
                  </h2>
                  <ul className="list-unstyled">
                    <li className="mb-0 d-flex justify-content-between align-items-center">
                      <div className="list_box mb-2">
                        <span className="text-white-50">
                          Owner:
                        </span>
                        <span className="text-white d-inline-block ms-2">
                          0XB3D...E978B
                        </span>
                        <button className="bg-transparent border-0 outline-0">
                          <span className="copy_clipboard">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={20} height={20} viewBox="0 0 20 20" id="moo-detail-copy"><g id="Group_2831" data-name="Group 2831" transform="translate(-952.034)"><g id="Mask_Group_42" data-name="Mask Group 42" transform="translate(955.034 3)" clipPath="url(#clip-path)"><g id="_017-copy" data-name="017-copy" transform="translate(0.068 -0.563)"><path id="Path_5824" data-name="Path 5824" d="M9.324,5A1.825,1.825,0,0,0,7.5,6.824v8.958a1.824,1.824,0,0,0,1.824,1.824h7.631a1.824,1.824,0,0,0,1.824-1.824V6.991A1.99,1.99,0,0,0,16.789,5Zm6.3,9.622H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Zm0-1.991H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Zm0-1.991H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Z" transform="translate(-4.183 -5)" fill="#EEDB7A" /> <path id="Path_5825" data-name="Path 5825" d="M10.558,17.986a2.822,2.822,0,0,1-2.82-2.82V6.208c0-.057.014-.109.017-.166H7.241A1.826,1.826,0,0,0,5.417,7.866V18.483a1.826,1.826,0,0,0,1.824,1.824H15.2a1.826,1.826,0,0,0,1.824-1.824v-.5Z" transform="translate(-5.417 -4.383)" fill="#EEDB7A" /></g></g></g></svg>
                          </span>
                        </button>
                      </div>
                      <div className="list_box mb-2">
                        <span className="text-white-50">
                          ID:
                        </span>
                        <span className="text-white d-inline-block ms-2">
                          # 30868
                        </span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex justify-content-between align-items-center">
                      <div className="list_box mb-2">
                        <span className="text-white-50">
                          Date:
                        </span>
                        <span className="text-white d-inline-block ms-2">
                          17 hours ago
                        </span>
                        <button className="bg-transparent border-0 outline-0">
                          <span className="copy_clipboard">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={20} height={20} viewBox="0 0 20 20" id="moo-detail-copy"><g id="Group_2831" data-name="Group 2831" transform="translate(-952.034)"><g id="Mask_Group_42" data-name="Mask Group 42" transform="translate(955.034 3)" clipPath="url(#clip-path)"><g id="_017-copy" data-name="017-copy" transform="translate(0.068 -0.563)"><path id="Path_5824" data-name="Path 5824" d="M9.324,5A1.825,1.825,0,0,0,7.5,6.824v8.958a1.824,1.824,0,0,0,1.824,1.824h7.631a1.824,1.824,0,0,0,1.824-1.824V6.991A1.99,1.99,0,0,0,16.789,5Zm6.3,9.622H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Zm0-1.991H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Zm0-1.991H10.652a.5.5,0,0,1,0-1h4.976a.5.5,0,0,1,0,1Z" transform="translate(-4.183 -5)" fill="#EEDB7A" /> <path id="Path_5825" data-name="Path 5825" d="M10.558,17.986a2.822,2.822,0,0,1-2.82-2.82V6.208c0-.057.014-.109.017-.166H7.241A1.826,1.826,0,0,0,5.417,7.866V18.483a1.826,1.826,0,0,0,1.824,1.824H15.2a1.826,1.826,0,0,0,1.824-1.824v-.5Z" transform="translate(-5.417 -4.383)" fill="#EEDB7A" /></g></g></g></svg>
                          </span>
                        </button>
                      </div>
                      <div className="list_box mb-2">
                        <span className="text-white-50">
                          Ends in:
                        </span>
                        <span className="text-white d-inline-block ms-2">
                          9 days
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="coin-box"><img

                    src={require('../../Static/img/ic-moo-token.8d1a1ee.png')}

                    style={{ height: '2.4rem' }} /> <span className="text-white">0 / 3
                      <span style={{ color: '#93a3af' }} className=" ms-3">Daily</span></span></div>
                  <div className="evolution_wrapper mt-4">
                    <div className="evolution-box me-3">

                      <div className="element-earth">

                        <img src={require('../../Static/img/evol-molacenet-1.53dc268.png')} className="w-100 h-100" />

                      </div> {/**/}</div>


                    <div className="evolution-box me-3">

                      <div className="element-earth">

                        <img src={require('../../Static/img/evol-molacenet-1.53dc268.png')} className="w-100 h-100" />

                      </div> {/**/}</div>


                    <div className="evolution-box me-3">

                      <div className="element-earth">

                        <img src={require('../../Static/img/evol-molacenet-3.c0a800f.png')} className="w-100 h-100" />

                        <div className="icon-lock"><img src={require('../../Static/img/icon-lock.efbd6e5.png')} /></div>

                      </div> {/**/}</div>



                  </div>
                </div>
                <div className="details_body mt-3 mt-md-5">
                  <ul className="details_body_list list-unstyled">
                    <li>
                      <h5 className="list_title text-white font-weight-bold">
                        Info
                      </h5>
                      <div className="list_wrapper p-3">
                        <span className="nesting_title text-white">Base Stats</span>
                        <ul className="list-unstyled inner_list d-flex">
                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/heart.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  HP
                                </span>
                                <b className="text_secondary">
                                  1,156</b>
                              </div>
                            </div>
                          </li>

                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon1.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  ATK
                                </span>
                                <b className="text_secondary">
                                  24</b>
                              </div>
                            </div>
                          </li>


                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-def.c43f3bd.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  DEF
                                </span>
                                <b className="text_secondary">
                                  39</b>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-cri.1aad9c5.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  CRI
                                </span>
                                <b className="text_secondary">
                                  50 <sub style={{ fontSize: '8px' }} className="text_9a">
                                    (13.40%)</sub> </b>
                              </div>
                            </div>
                          </li>




                        </ul>
                      </div>
                    </li>


                    <li>
                      <div className="list_wrapper p-3">
                        <span className="nesting_title text-white">Final Stats <b style={{ fontSize: '8px' }} className="text_9a d-inline-block ms-3">include level and foods</b> </span>
                        <ul className="list-unstyled inner_list d-flex">
                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/heart.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  HP
                                </span>
                                <b className="text_secondary">
                                  1,563
                                </b>
                              </div>
                            </div>
                          </li>

                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon1.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  ATK
                                </span>
                                <b className="text_secondary">
                                  65</b>
                              </div>
                            </div>
                          </li>


                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-def.c43f3bd.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  DEF
                                </span>
                                <b className="text_secondary">
                                  51</b>
                              </div>
                            </div>
                          </li>
                          <li className="mb-2 me-3 me-md-5">
                            <div className="d-flex align-items-center">
                              <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-cri.1aad9c5.png')} alt="img" />
                              <div className="content">
                                <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                  CRI
                                </span>
                                <b className="text_secondary">
                                  67 <sub style={{ fontSize: '8px' }} className="text_9a">
                                    (13.40%)</sub> </b>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <h5 className="list_title text-white font-weight-bold">
                        Evolution
                      </h5>


                      <div className="list_wrapper p-3">

                        <div className=" border-0  top_list">
                          <span className="nesting_title text-white">
                            Used Foods
                          </span>
                          <ul className="list-unsltyled food_list mt-3 d-flex flex-wrap">
                            <li className="mb-2 me-2">
                              <img src={require('../../Static/img/food-coconut.0aefc6b.png')} alt="img" />
                              <span className="list_count text_secondary">
                                x2
                              </span>
                            </li>

                            <li className="mb-2 me-2">
                              <img src={require('../../Static/img/food-strawberry.07b2bd2.png')} alt="img" />
                              <span className="list_count text_secondary">
                                x2
                              </span>
                            </li>

                            <li className="mb-2 me-2">
                              <img src={require('../../Static/img/food-orange.2b67f6e.png')} alt="img" />
                              <span className="list_count text_secondary">
                                x2
                              </span>
                            </li>
                          </ul>
                        </div>


                        <div className="bottom_list">
                          <span className="nesting_title text-white">Stats</span>
                          <ul className="list-unstyled inner_list d-flex">
                            <li className="mb-2 me-3 me-md-5">
                              <div className="d-flex align-items-center">
                                <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/heart.png')} alt="img" />
                                <div className="content">
                                  <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                    HP
                                  </span>
                                  <b className="text_secondary">
                                    1,503</b>
                                  <b style={{ color: '#21c714' }} className="d-inline-block ms-1">+60</b>
                                </div>
                              </div>
                            </li>

                            <li className="mb-2 me-3 me-md-5">
                              <div className="d-flex align-items-center">
                                <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon1.png')} alt="img" />
                                <div className="content">
                                  <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                    ATK
                                  </span>
                                  <b className="text_secondary">
                                    31</b>

                                  <b style={{ color: '#21c714' }} className="d-inline-block ms-1">+34</b>
                                </div>
                              </div>
                            </li>


                            <li className="mb-2 me-3 me-md-5">
                              <div className="d-flex align-items-center">
                                <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-def.c43f3bd.png')} alt="img" />
                                <div className="content">
                                  <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                    DEF
                                  </span>
                                  <b className="text_secondary">
                                    51</b>
                                </div>
                              </div>
                            </li>
                            <li className="mb-2 me-3 me-md-5">
                              <div className="d-flex align-items-center">
                                <img style={{ height: '2rem' }} className="me-2" src={require('../../Static/img/icon-cri.1aad9c5.png')} alt="img" />
                                <div className="content">
                                  <span style={{ fontSize: '8px' }} className="d-block text_9a mb-n1" >
                                    CRI
                                  </span>
                                  <b className="text_secondary">
                                    65  <b style={{ color: '#21c714' }} className="d-inline-block mx-1">+2</b>
                                    <sub style={{ fontSize: '8px' }} className="text_9a">
                                      (13.40%)</sub> </b>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>





                    <li>
                      <h5 className="list_title text-white font-weight-bold">
                        Trade
                      </h5>
                      <div className="list_wrapper p-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="box text_secondary d-flex align-items-center">
                            <img style={{ height: '2.4rem' }} src={require('../../Static/img/ic-busd-token.454c7c3.png')} alt="" /> <span style={{ fontSize: '2.4rem' }}>
                              5.000 BUSD
                            </span>
                          </div>
                          <button className="btn_secondary border-0 outline-0 h4" data-mdb-toggle="modal" data-mdb-target="#buy_moo_confirm">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </li>

                    <li>
                      <h5 className="list_title text-white font-weight-bold">
                        Activity
                      </h5>
                      <div className="list_wrapper p-4">

                      </div>
                    </li>




                  </ul>
                </div>
              </div>
              {/* ............Modal Body..............End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MooDetailsModal;
