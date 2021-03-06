import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  const [pathName, setPathName] = useState("/");
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [pathName]);

  const nav_item_list = [
    {
      id: 1,
      name: "Marketplace",
      link: "/",
      activeClass: "",
    },
    {
      id: 2,
      name: "Staking",
      link: "/Staking",
      activeClass: "",
    },
    {
      id: 3,
      name: "Egg Sell ",
      link: "/egg_sell",
      activeClass: "",
    },
  ];

  return (
    <header id="Header">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark ">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Navbar brand */}
            <Link className="navbar-brand me-2" to="/">
              <img
                src={require("../../Static/img/moo-brand-2.e4f7641.png")}
                height={16}
                alt="MDB Logo"
                loading="lazy"
                style={{ height: "32px" }}
              />
            </Link>

            {/* Toggle button */}
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center d-lg-none me-3">
                <button
                  data-mdb-toggle="modal"
                  data-mdb-target="#wallet_open_modal"
                  type="button"
                  className="btn_app"
                >
                  Connect Wallet
                </button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars fa-2x" />
              </button>
            </div>

            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse "
              id="navbarButtonsExample"
            >
              {/* Left links */}
              <ul className="navbar-nav flex-grow-1 justify-content-end mb-2 mb-lg-0 pt-4 pt-lg-0">
                {nav_item_list.map((v) => {
                  return (
                    <li className="nav-item" key={v.id}>
                      <NavLink
                        // activeClass="active_nav_action"
                        className={(navData) =>
                          navData.isActive
                            ? "nav-link nav_action_link active_nav_action"
                            : "nav-link nav_action_link"
                        }
                        to={v.link}
                      >
                        {v.name}
                      </NavLink>
                    </li>
                  );
                })}
                <li className="nav-item d-lg-none">
                  <button
                    data-mdb-toggle="modal"
                    data-mdb-target="#buy_moo_open_modal"
                    type="button"
                    className="btn_app"
                  >
                    <img
                      style={{ height: "24px" }}
                      src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                      alt="img"
                    />{" "}
                    Buy $MOO
                  </button>
                </li>
              </ul>
              {/* Left links */}
              <div className="d-none align-items-center d-lg-flex">
                <button
                  data-mdb-toggle="modal"
                  data-mdb-target="#buy_moo_open_modal"
                  type="button"
                  className="btn_app d-none d-lg-block"
                >
                  <img
                    style={{ height: "24px" }}
                    src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                    alt="img"
                  />{" "}
                  Buy $MOO
                </button>

                <button
                  type="button"
                  data-mdb-toggle="modal"
                  data-mdb-target="#wallet_open_modal"
                  className="btn_app"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </div>
    </header>
  );
}

export default Header;
