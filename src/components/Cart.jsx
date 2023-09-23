import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Component
import Foods from "./shared/Foods";

//Style
import style from "./Cart.module.css";

// Actions
import { clear, checkout } from "../redux/cart/cartAction";

//Function
import { separateNumbers } from "../helper/functions";

//Icons
import food from "../assets/images/pizza.png";
import location from "../assets/images/locationIcon.png";
import cart from "../assets/images/cart.png";
import tick from "../assets/images/tick.png";
import close from "../assets/images/close.png";

const Cart = () => {
  const [isclicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isclicked);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [todos, setTodos] = useState([]);
  const changeAddressHandler = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
    setIsClicked(false);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <div className={style.container}>
      {state.itemsCounter > 0 && (
        <div>
          <div className={style.selectedFoods}>
            <div className={style.title}>
              <img src={food} alt="icon" />
              <h4>غذا های انتخابی شما</h4>
            </div>
            {state.selectedItems.map((item) => {
              return <Foods key={item.id} foods={item} />;
            })}
          </div>
          <div className={style.location}>
            <div>
              <div className={style.title}>
                <img src={location} alt="icon" />
                <h4>آدرس</h4>
              </div>
              <p onClick={clickHandler}>تغییر آدرس</p>
            </div>
            <div className={style.addressInputContainer}>
              <input
                className={isclicked && style.addressInput}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="با کلیک بر روی تغییر آدرس، آدرس جدید خود را وارد نمائید."
              />
              <img
                src={tick}
                alt="tick_icon"
                className={isclicked && style.tickInput}
                onClick={changeAddressHandler}
              />
            </div>
            <div className={style.selectedLocations}>
              {todos.map((todo, index) => (
                <label class={style.checkBox} key={index}>
                  {todo}
                  <div>
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span></span>
                    <img
                      src={close}
                      alt="close_icon"
                      className={style.deleteInput}
                      onClick={() => handleDeleteTodo(index)}
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className={style.cart}>
            <div className={style.title}>
              <img src={cart} alt="icon" />
              <h4>سبد خرید</h4>
            </div>
            <div className={style.orderContainer}>
              <p className={style.items}>
                مجموع تعداد انتخاب‌های شما : {state.itemsCounter}
              </p>
              <p className={style.payments}>
                مجموع سبد خرید شما : {separateNumbers(state.total)} تومان
              </p>
              <div className={style.register}>
                <button
                  className={style.checkout}
                  onClick={() => dispatch(checkout())}
                >
                  پرداخت
                </button>
                <button
                  className={style.clear}
                  onClick={() => dispatch(clear())}
                >
                  حذف سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {state.itemsCounter === 0 && !state.checkout && (
        <div className={style.complete}>
          <h3>سبد خرید شما خالی است.</h3>
          <Link to="/home">برو به صفحه اصلی</Link>
        </div>
      )}
      {state.checkout && (
        <div className={style.complete}>
          <h3>مرسی از خرید شما</h3>
          <Link to="/home">هنوز گرسنته ؟</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
