import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* Style */
import style from "./Navbar.module.css";

//Images
import logo from "../../assets/images/logo.png";
import location from "../../assets/images/location.png";
import cart from "../../assets/images/fastcart.png";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const state = useSelector(state => state.cartState);

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.hamburger_menu} onClick={clickHandler}>
        <span
          className={`${style.bar} ${style.bar_one} ${
            isExpanded && style.expanded
          }`}
        ></span>
        <span
          className={`${style.bar} ${style.bar_two} ${
            isExpanded && style.expanded
          }`}
        ></span>
        <span
          className={`${style.bar} ${style.bar_three} ${
            isExpanded && style.expanded
          }`}
        ></span>
      </div>
      <div className={`${style.leftContainer} ${isExpanded && style.expanded}`}>
        <div className={style.search}>
          <input type="text" placeholder="در دِلیشِز جست‌وجو کنید ..." />
        </div>
        <div className={style.location}>
          <p>آدرس خود را انتخاب کنید</p>
          <img src={location} alt="location" />
        </div>
        <Link to="/cart" className={style.cart}>
          <p>غذاهای انتخابی شما</p>
          <div className={style.cartIcon}>
            <img src={cart} alt="cart" />
            <div className={style.counter}><span>{state.itemsCounter}</span></div>
          </div>
        </Link>
        <div className={style.login}>
          <button>عضویت / ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
