import React, { useState } from "react";
import "./pizza.css";


// import imgPizza from "../../assets/img/image 2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPizzaButton } from "../../redax/slice/CartSlice";

function PizzaBlock({id,imageUrl,price,rating,sizes,title,types}) {
  
const dispatch=useDispatch()
const {pizzaCart}=useSelector((state)=>state.cart)




const pizzaCartCount=pizzaCart.find((el)=>el.id ===id)



const addButon=()=>{
  const add={
    id, 
    imageUrl,
    price,
    title

  }
  dispatch(setPizzaButton(add))


}
  const [pizzaType, setPizzaType] = useState(0);

  const [pizzaSize, setPizzaSize] = useState(0);



  const sort_listPizza = ["тонкое", "традиционное"];



  

  

  const handlePizzaSizeChange = (size) => {
    setPizzaSize(size);

  };

  const handlePizzaTypeChange = (index) => {
    setPizzaType(index);
  };
  

  return (
    <div className="pizzaBlok">
     <Link to={`PizaHistori/${id}`}>
     <img src={imageUrl} alt=""  style={{marginLeft:'18px',width:'260px'}}/>

      <h3 className="title_pizza">{title}</h3>
     
     </Link>

      <div className="pizza_sortMenu">
        <ul className="pizzaBloksort_listUl">
          {types.map((el, index) => (
            <li
              onClick={()=>handlePizzaTypeChange(el)}
              className={pizzaType === index ? "activ_pizza" : ""}
              key={index}
            >
              {sort_listPizza[el]}
            </li>
          ))}
        </ul>

        <ul className="pizzaBloksize_list">
          {sizes.map((el, index) => (
            <li
              onClick={() => handlePizzaSizeChange(index)}
              className={pizzaSize === index ? "activ_size" : ""}
              key={index}
            >
              {el} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_pizza">
        <p className="p_price">от {price} ₽</p>

        <button className="btn_price" onClick={addButon}>
          <span className="sp1">+ Добавить</span>
            {
              pizzaCartCount && <span className="sp2">{pizzaCartCount.count}</span>
            }
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
