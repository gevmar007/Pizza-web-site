import React from "react";
import { useDispatch, useSelector } from "react-redux";

import img from "../assets/img/Vector.png";
import img1 from "../assets/img/Group 44.png";
import Cartitem from "../components/Cartitem";
import reactLange from "../assets/img/_Path_.svg";
import Cartemty from "../components/cartemty/Cartemty";
import { Link } from "react-router-dom";
import { Remove } from "../redax/slice/CartSlice";
import '../components/cartitem.css'
function Cart() {
  const dispatch = useDispatch();
  const { pizzaCart } = useSelector((state) => state.cart);
 

  const pizzaCountCart= pizzaCart.reduce((acum, item)=>{

    return acum + item.count* item.price
  },0);
  
  const pizzaCountCarte= pizzaCart.reduce((acum, item)=>{

    return acum + item.count
  },0)

  if (!pizzaCart.length) {
    return <Cartemty/>
  }

  return (
    <div className="cart_container">
      <div className="blockCart">
        <div className="cart_img">
          <img src={img} alt="" />
          <h2 className="cartt">Корзина</h2>
        </div>

        <div className="cartImg1" onClick={()=>dispatch(Remove())} >
          <img src={img1} alt="" />
        </div>
      </div>
      <div>
        {pizzaCart.map((el) => (
          <Cartitem key={el.id} {...el} />
        ))}
      </div>

      <div className="cart_size">
        <p>Всего пицц: {pizzaCountCarte} шт.</p>
        <p>Сумма заказа: {pizzaCountCart} ₽</p>
      </div>
      <div className="block_btn">
        <Link  to="/" className="btn_size">
       
          <img src={reactLange} alt="" />
          Вернуться назад
      
        </Link>
        <button className="btnList">Оплатить сейчас</button>
      </div>
    </div>
  );
}

export default Cart;
