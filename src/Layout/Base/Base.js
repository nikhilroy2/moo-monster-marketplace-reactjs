import React from "react";
import "./Base.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Base(props) {
  return (
    <div id="Base">
      <Header></Header>
      <main>{props.children}</main>

      <Footer></Footer>
    </div>
  );
}

export default Base;
