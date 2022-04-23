import "./MarketplaceItemsCard.css";
export const MarketplaceItemsCard = ({
  head_img,
  head_full_img,
  head_content_img,
  head_border,
  Lv,
  head_top_svg,
  rating_svg,
  name,
  card_token,
  busd,
  count_value,
}) => {
  return (
    <div
      id="MarketplaceItemsCard"
      data-mdb-toggle="modal"
      data-mdb-target="#moo_details_modal_open"
    >
      <div
        className="card_head"
        style={{
          "--border-color": head_border,
          background: `url(${head_full_img}) center/100% 100% no-repeat`,
        }}
      >
        <img className="head_img" src={head_img} alt="img" />
        <div className="head_content">
          <div
            className="content_1 me-2"
            style={{
              background: `url(${head_content_img}) center/100% 100% no-repeat`,
            }}
          >
            <span className="name">Lv</span>
            <span className="count">{Lv}</span>
          </div>
          <div className="content_2">
            <div className="content_2_top_svg mb-n3">{head_top_svg}</div>
            <div className="content_2_rating">{rating_svg}</div>
          </div>
        </div>
      </div>
      <div className="card_body">
        <ul className="list-unstyled p-3 px-4">
          <li className="item_1 d-flex justify-content-between align-items-center">
            <span className="name text_secondary family_bunny">{name}</span>
            <span className="value text-white">{card_token}</span>
          </li>
          <li className="item_1 text-white d-flex justify-content-between align-items-center">
            <span className="value">
              <img
                src={require("../../Static/img/ic-busd-token.454c7c3.png")}
                style={{ height: "14px" }}
                className="me-1"
                alt="img"
              />{" "}
              {busd}
            </span>
            <span className="value text-white-50">{count_value}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
