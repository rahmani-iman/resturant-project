import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Style
import style from './Foods.module.css';

// Actions
import { addItem, removeItem, increase, decrease } from '../../redux/cart/cartAction';

// Functions
import { isInCart, quantityCount } from '../../helper/functions';

// Icons
import trashIcon from "../../assets/images/trash.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const Foods = ({foods}) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <div className={style.foods} key={foods.name}>
                <div className={style.titleFoods}>
                <div className={style.desFoods}>
                    <h2>{foods.name}</h2>
                    <p>{foods.details}</p>
                </div>
                <div>
                    <img src={foods.cover.url} alt='cover' />
                </div>
                </div>
                <div className={style.cartFoods}>
                    <p>{foods.price} تومان</p>
                    <div className={style.buttonContainer}>
                        {quantityCount(state, foods.id) === 1 && <button className={style.smallButton} onClick={() => dispatch(removeItem(foods))}><img src={trashIcon} alt="trash_icon" /></button>}
                        {quantityCount(state, foods.id) > 1 && <button className={style.smallButton} onClick={() => dispatch(decrease(foods))}><img src={minus} alt='minus_icon' /></button>}
                        {quantityCount(state, foods.id) > 0 && <span className={style.counter}>{quantityCount(state, foods.id)}</span>}
                        {
                            isInCart(state, foods.id) ?
                            <button className={style.smallButton} onClick={() => dispatch(increase(foods))}><img src={plus} alt='plus_icon' /></button> :
                            <button onClick={() => dispatch(addItem(foods))}>افزودن</button>
                        }
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Foods;