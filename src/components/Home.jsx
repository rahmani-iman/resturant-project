import React from 'react';

//Components
import Category from './shared/Category';

//Style
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>سفارش آنلاین غذا از<span>دِلیشِز</span></h1>
      </div>
      <div className={style.category}>
        <Category />
      </div>
    </div>
  );
};

export default Home;