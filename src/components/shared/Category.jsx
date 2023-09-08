import React from 'react';

//Style
import style from './Category.module.css';

//Images
import irani from '../../assets/images/irani.jpg';
import fastfood from '../../assets/images/fastfood.jpg';
import kebab from '../../assets/images/kebab.jpg';
import pizza from '../../assets/images/pizza.jpg';
import burger from '../../assets/images/burger.jpg';
import sandwich from '../../assets/images/sandwich.jpg';
import sokhari from '../../assets/images/sokhari.jpg';
import italy from '../../assets/images/italy.jpg';
import salad from '../../assets/images/salad.jpg';

const Category = () => {
  return (
    <div className={style.container}>
      <h2>دسته بندی ها</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <img src={irani} alt='coverPhoto' />
          <button>ایرانی <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={fastfood} alt='coverPhoto' />
          <button>فست فود <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={kebab} alt='coverPhoto' />
          <button>کباب <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={pizza} alt='coverPhoto' />
          <button>پیتزا <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={burger} alt='coverPhoto' />
          <button>برگر <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={sandwich} alt='coverPhoto' />
          <button>ساندویچ <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={sokhari} alt='coverPhoto' />
          <button>سوخاری <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={italy} alt='coverPhoto' />
          <button>پاستا <span>&#62;</span></button>
        </div>
        <div className={style.card}>
          <img src={salad} alt='coverPhoto' />
          <button>سالاد <span>&#62;</span></button>
        </div>
      </div>
    </div>
  );
};

export default Category;