import React from "react";
import { withRouter } from "react-router";

import { ReactComponent as UserIcon } from "../../assets/girl.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping_cart-24px.svg";
import { Link } from "react-router-dom";

function Header({ classList, children, location, noOfItems }) {
  const path = location.pathname.slice(1);

  return (
    <header
      className={`row ${
        path.length === 0 ? " bg-transparent" : " header-shadow"
      }`}
    >
      <div className="logo col-4">
        <img
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          alt="happay logo"
        />
        <span className="company-name">Happay</span>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-end">
        {path.length === 0 ? (
          <div className="cart-icon d-inline-block">
            <Link to="/order-summary">
              <CartIcon className="ml-auto" />
              <span className="cart-items">{noOfItems}</span>
            </Link>
          </div>
        ) : null}
        <div className="profile">
          <UserIcon />
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  classList: [],
  noOfItems: 0
};

export default withRouter(Header);
