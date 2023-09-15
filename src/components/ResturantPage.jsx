import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//Component
import Loader from './shared/Loader';

//Style
import style from './ResturantPage.module.css';

//GraphQL
import { GET_RESTURANT } from '../qraphql/queries';

//Images
import star from '../assets/images/star.png';

const ResturantPage = () => {

  const params = useParams();
  const slug = params.id
  
  const { loading, data, error } = useQuery(GET_RESTURANT, {variables: {slug}});
  if (loading) return <Loader />;
  if (error) return <h2>Something went wrong</h2>;

  const {name, rate, deliveryfee, startTime, endTime, category, foods, drinks, cover, location} = data.resturant;

  const foodsCategories = Array.from(new Set(foods.map(food => food.category)));
  const drinksCategories = Array.from(new Set(drinks.map(drink => drink.category)));

  return (
    <div className={style.container}>
      <div className={style.desR}>
        <div className={style.head}>
          <div className={style.headResturant}>
            <img src={cover.url} alt='cover' />
            <div className={style.titleResturant}>
              <h2>رستوران {name}</h2>
              <div className={style.rateResturant}>
                <span>{rate}</span>
                <img src={star} alt='rate'/>
              </div>
            </div>
          </div>
          <div className={style.informationResturant}>
            <button type='text'>اطلاعات و نظرات</button>
          </div>
        </div>
        <div className={style.category}>
          {foodsCategories.map(category => {
            return <p key={category}>{category}</p>
          })}
          {drinksCategories.map(category => {
            return <p key={category}>{category}</p>
          })}
        </div>
      </div>
      <div className={style.foodsContainer}>
        {foods.map(food => {
          return(
          <div className={style.foods} key={food.name}>
            <div className={style.titleFoods}>
              <div className={style.desFoods}>
                <h2>{food.name}</h2>
                <p>{food.details}</p>
              </div>
              <div>
                <img src={food.cover.url} alt='cover' />
              </div>
            </div>
            <div className={style.cartFoods}>
              <p>{food.price} تومان</p>
              <button type='text'>افزودن</button>
            </div>
          </div>
        )})}
        {drinks.map(drink => {
          return(
            <div className={style.foods} key={drink.name}>
              <div className={style.titleFoods}>
                <div className={style.desFoods}>
                  <h2>{drink.name}</h2>
                  <p>{drink.details}</p>
                </div>
                <div>
                  <img src={drink.cover.url} alt='cover' />
                </div>
              </div>
              <div className={style.cartFoods}>
                <div>{drink.price} تومان</div>
                <button type='text'>افزودن</button>
              </div>
            </div>
          )})}
      </div>
    </div>
  );
};

export default ResturantPage;