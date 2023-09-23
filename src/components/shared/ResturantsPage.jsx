import React from "react";
import { Link } from "react-router-dom";

//Style
import style from "./ResturantsPage.module.css";

//Component
import Loader from "./Loader";

//Images
import star from "../../assets/images/star.png";
import delivery from "../../assets/images/delivery.png";

const ResturantsPage = (props) => {
  const { loading, data, error, isSearched } = props;
  if (loading) return <Loader />;
  if (error) return <h2>Something went wrong</h2>;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>رستوران ها</h2>
        {isSearched && <Link to="/home">&larr;</Link>}
      </div>
      <div className={style.resturantContainer}>
        {data.resturants.map((resturant) => {
          return (
            <Link
              to={`/resturant/${resturant.slug}`}
              className={style.cardContainer}
              key={resturant.slug}
            >
              <img
                src={resturant.cover.url}
                alt="cover"
                className={style.image}
              />
              <h3 className={style.name}>{resturant.name}</h3>
              <div className={style.rate}>
                <span>{resturant.rate}</span>
                <img src={star} alt="rate" />
              </div>
              <p className={style.category}>{resturant.category}</p>
              <div className={style.deliveryfee}>
                <img src={delivery} />
                <p>پیک فروشنده {resturant.deliveryfee} تومان</p>
              </div>
            </Link>
          );
        })}
      </div>
      {!data.resturants.length && (
        <div className={style.noExist}>
          <p>متاسفانه رستورانی وجود ندارد !</p>
        </div>
      )}
    </div>
  );
};

export default ResturantsPage;
