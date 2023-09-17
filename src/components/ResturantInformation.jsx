import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

//Component
import Loader from "./shared/Loader";

//Style
import style from "./ResturantInformation.module.css";

//Images
import star from "../assets/images/star.png";
import card from "../assets/images/card.png";
import cart from "../assets/images/cart.png";
import time from "../assets/images/time.png";
import map from "../assets/images/map.webp";

//GraphQL
import { GET_RESTURANT } from "../qraphql/queries";

const ResturantInformation = () => {
  const params = useParams();
  const slug = params.id;

  const { loading, data, error } = useQuery(GET_RESTURANT, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h2>Something went wrong</h2>;

  const {
    name,
    rate,
    deliveryfee,
    startTime,
    endTime,
    category,
    foods,
    drinks,
    cover,
    location,
  } = data.resturant;

  return (
    <div className={style.container}>
      <div className={style.des}>
        <div className={style.rt}>
          <div className={style.logo}>
            <img src={cover.url} />
          </div>
          <div className={style.title}>
            <h2>رستوران {name}</h2>
            <div className={style.rate}>
              <span>{rate}</span>
              <img src={star} alt="rate" />
            </div>
            <div className={style.category}>
              <p>{category}</p>
            </div>
          </div>
        </div>
        <div className={style.map}>
          <img src={map} alt="map" />
        </div>
      </div>
      <div className={style.det}>
        <div className={style.rDet}>
            <img src={time} alt="logo"/>
            <div>
                <p>ساعت کاری</p>
                <p>امروز از ساعت <span>{startTime}</span> تا <span>{endTime}</span></p>
            </div>
        </div>
        <div className={style.rDet}>
            <img src={card} alt="logo"/>
            <div>
                <p>شیوه های پرداخت</p>
                <p>آنلاین</p>
            </div>
        </div>
        <div className={style.rDet}>
            <img src={cart} alt="logo"/>
            <div>
                <p>حداقل سبد خرید</p>
                <p>{deliveryfee} تومان</p>
            </div>
        </div>
      </div>
      <div className={style.commentsContainer}>
        <h2>نظرات</h2>
        <div className={style.commentContainer}>
            <div className={style.commentTitle}>
                <h3>علیرضا</h3>
                <p>22 شهریور 1402</p>
            </div>
            <div className={style.comment}>
                <p>این رستوران واقعا بینظیر است و غذاهای خوشمزه ای دارد</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantInformation;
