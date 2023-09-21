import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/* Style */
import style from "./Navbar.module.css";

//Action
import { setInputValue } from "../../redux/searchValues/searchValuesAction";

//Images
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/fastcart.png";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const dispatch = useDispatch();
  const state = useSelector(state => state.cartState);

  return (
    <div className={style.container}>
      <Link to="/home" className={style.logo}>
        <img src={logo} alt="logo" />
      </Link>
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
          <Link to="/selectedResturants">
            <input type="text" placeholder="در دِلیشِز جست‌وجو کنید ..." onChange={(e) => dispatch(setInputValue(e.target.value))}/>
          </Link>
        </div>
        <Link to="/cart" className={style.cart} onClick={() => setIsExpanded(false)}>
          <p>غذاهای انتخابی شما</p>
          <div className={style.cartIcon}>
            <img src={cart} alt="cart" />
            <div className={style.counter}><span>{state.itemsCounter}</span></div>
          </div>
        </Link>
        <div className={style.login} onClick={() => setIsExpanded(false)}>
          <button>عضویت / ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
