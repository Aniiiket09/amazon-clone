import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Order from "./Order";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem-700x394.jpg"
          alt="logo-img"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="optionLineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="header_option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="optionLineOne">Yours</span>
          <span className="optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
