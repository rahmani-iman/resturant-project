import React from "react";
import { useQuery } from "@apollo/client";

//Components
import Category from "./shared/Category";
import Resturants from "./shared/ResturantsPage";

//Query
import { GET_RESTURANTS } from "../qraphql/queries";

//Style
import style from "./Home.module.css";

//Image
import banner from "../assets/images/banner.png";

const Home = () => {
  const { loading, data, error } = useQuery(GET_RESTURANTS);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>
          سفارش آنلاین غذا از<span>دِلیشِز</span>
        </h1>
        <img src={banner} alt="banner" />
      </div>
      <div className={style.category}>
        <Category />
      </div>
      <div>
        <Resturants loading={loading} data={data} error={error} />
      </div>
    </div>
  );
};

export default Home;
