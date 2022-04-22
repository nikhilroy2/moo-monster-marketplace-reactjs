import React from "react";
import "./Footer.css";
function Footer(props) {
  const footer_nav_list1 = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Game",
      link: "#",
    },
    {
      id: 3,
      name: "Marketplace",
      link: "#",
    },
    {
      id: 4,
      name: "Buy token",
      link: "#",
    },
  ];

  const footer_nav_list2 = [
    {
      id: 1,
      name: "News",
      link: "#",
    },
    {
      id: 2,
      name: "Get start",
      link: "#",
    },
    {
      id: 3,
      name: "Vesting",
      link: "#",
    },
    {
      id: 4,
      name: "Whitepaper",
      link: "#",
    },
  ];

  const footer_nav_list3 = [
    {
      id: 1,
      name: "Helps",
      link: "#",
    },
    {
      id: 2,
      name: "FAQ",
      link: "#",
    },
    {
      id: 3,
      name: "Contact us",
      link: "#",
    },
  ];

  const social_list_monster_box = [
    {
      id: 1,
      link: "#",
      name: "twitter",
      img: require("../../Static/img/twitter_icon.png"),
    },
    {
      id: 2,
      link: "#",
      name: "",
      img: require("../../Static/img/notification_icon.png"),
    },
    {
      id: 3,
      link: "#",
      name: "",
      img: require("../../Static/img/telegram_icon.png"),
    },
    {
      id: 4,
      link: "#",
      name: "",
      img: require("../../Static/img/fb_icon.png"),
    },
    {
      id: 5,
      link: "#",
      name: "",
      img: require("../../Static/img/youtube_icon.png"),
    },
    {
      id: 6,
      link: "#",
      name: "",
      img: require("../../Static/img/discord_icon.png"),
    },
    {
      id: 7,
      link: "#",
      name: "",
      img: require("../../Static/img/book_icon.png"),
    },
  ];
  return (
    <footer id="Footer">
      <div className="footer_top_content px-3 px-md-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center flex-wrap flex-sm-nowrap">
                <img
                  className="w-25 footer_logo"
                  src={require("../../Static/img/logo.d169cc1.png")}
                  alt="img"
                />
                <p className="w-100">
                  Fight and adventure along with the Moo monster in the
                  Mooniverse. Defeat the enemies and others player to earn
                  reward and collect varies of NFTs.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="col_wrapper">
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <div className="col_wrapper">
                      <ul className="list-unstyled">
                        {footer_nav_list1.map((v) => {
                          return (
                            <li key={v.id}>
                              <a className="footer_link" href={v.link}>
                                {v.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div className="col_wrapper">
                      <ul className="list-unstyled">
                        {footer_nav_list2.map((v) => {
                          return (
                            <li key={v.id}>
                              <a className="footer_link" href={v.link}>
                                {v.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3">
                    <div className="col_wrapper">
                      <ul className="list-unstyled">
                        {footer_nav_list3.map((v) => {
                          return (
                            <li key={v.id}>
                              <a className="footer_link" href={v.link}>
                                {v.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom_content mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <ul className="pt-3 pt-xl-4 list-unstyled d-flex justify-content-center">
                {social_list_monster_box.map((v) => {
                  return (
                    <li key={v.id}>
                      <a href={v.link} className="p-2">
                        <img src={v.img} style={{ height: "32px" }} alt="img" />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <span>Copyright © 2021 Moo Monster. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
