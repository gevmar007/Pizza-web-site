import React from "react";

import "./cartitem.css";
import image5 from "../assets/img/image 5.png";
import vector1 from "../assets/img/Vector (1).png";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  decrementCount,
  removeItem,
} from "../redax/slice/CartSlice";

function Cartitem({ id, imageUrl, price, title, count }) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem contaner_cart">
      <div className="parDiv">
        <div className="blockLeft">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          {/* <div className="btnDiv"> */}
          <div className="cart_itemTitle">
            <h3>{title}</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
        </div>
        <div className="btn_dv">
          <div className="btn_Div">
            <button
              className="btn-"
              onClick={() => dispatch(decrementCount({ id }))}
            >
              -
            </button>
            <h3>{count}</h3>

            <button
              className="btn-"
              onClick={() => dispatch(incrementCount({ id }))}
            >
              +
            </button>
          </div>

          <h3>{price * count}₽</h3>
          <button
            className="btnVector"
            key={id}
            onClick={() => dispatch(removeItem(id))}
          >
            <img src={vector1} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
