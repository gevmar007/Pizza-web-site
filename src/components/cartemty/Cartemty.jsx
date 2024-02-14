import React from 'react'
import smayl from '../../assets/img/smayl.png'
import './cartemty.css'
import karzinaImg from '../../assets/img/shopping-cart-colour 1.png'
import { Link } from 'react-router-dom'
function Cartemty() {
  return (
    <div className='caertemty_container'>
      <div className='cartemtyBlock'>

      <div className='karzina_small'>
        <h1>Корзина пустая</h1>
        <img src={smayl} alt="" />
      </div>
      <div className='karzina_text'>
        <p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>

      </div>
      <div className='karzina_img'>
        <img src={karzinaImg} alt="" />
      </div>
        <Link to="/">
      <div className='karzina_btn'>
        <button>Вернуться назад</button>
      </div>
        </Link>
      </div>

    </div>
  )
}

export default Cartemty