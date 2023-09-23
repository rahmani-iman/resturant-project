import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

//Components
import Loader from "./shared/Loader";
import Foods from "./shared/Foods";

//Style
import style from "./ResturantPage.module.css";

//GraphQL
import { GET_RESTURANT } from "../qraphql/queries";

//Images
import star from "../assets/images/star.png";

const ResturantPage = () => {
  const params = useParams();
  const slug = params.id;

  const { loading, data, error } = useQuery(GET_RESTURANT, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h2>Something went wrong</h2>;

  const { name, rate, foods, drinks, cover } = data.resturant;

  const foodsCategories = Array.from(
    new Set(foods.map((food) => food.category))
  );
  const drinksCategories = Array.from(
    new Set(drinks.map((drink) => drink.category))
  );

  const foodsDrinks = foods.concat(drinks);

  return (
    <div className={style.container}>
      <div className={style.desR}>
        <div className={style.head}>
          <div className={style.headResturant}>
            <img src={cover.url} alt="cover" />
            <div className={style.titleResturant}>
              <h2>رستوران {name}</h2>
              <div className={style.rateResturant}>
                <span>{rate}</span>
                <img src={star} alt="rate" />
              </div>
            </div>
          </div>
          <Link
            to={`/resturantinfo/${slug}`}
            className={style.informationResturant}
          >
            <button type="text">اطلاعات و نظرات</button>
          </Link>
        </div>
        <div className={style.category}>
          {foodsCategories.map((category) => {
            return <p key={category}>{category}</p>;
          })}
          {drinksCategories.map((category) => {
            return <p key={category}>{category}</p>;
          })}
        </div>
      </div>
      <div className={style.foodsContainer}>
        {foodsDrinks.map((item) => (
          <Foods key={item.id} foods={item} />
        ))}
      </div>
    </div>
  );
};

export default ResturantPage;
