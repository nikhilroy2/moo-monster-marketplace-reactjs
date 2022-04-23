import React from "react";
import "./Base.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ConnectWalletModal from "../../Components/ConnectWalletModal/ConnectWalletModal";
import BuyMooModal from "../../Components/BuyMooModal/BuyMooModal";
import MooDetailsModal from "../../Components/MooDetailsModal/MooDetailsModal";
import BuyMooConfirmModal from "../../Components/BuyMooConfirmModal/BuyMooConfirmModal";
function Base(props) {
  return (
    <div id="Base">
      <Header></Header>
      <main>{props.children}</main>

      <Footer></Footer>
      {/* modal here */}
      <ConnectWalletModal />
      <BuyMooModal />
      <MooDetailsModal />
      <BuyMooConfirmModal />
    </div>
  );
}

export default Base;
