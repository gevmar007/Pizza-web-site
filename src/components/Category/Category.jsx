import React from "react";
import "./category.css";
import { useDispatch,useSelector } from "react-redux";
import { setActivCategori, setPageCount } from "../../redax/slice/FiltreSlice";
const dataCategory = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];


function Category( ) {
  
  const restpageCount=(idx)=>{
    dispatch(setActivCategori(idx))
    dispatch(setPageCount(1))
  

  }

  const dispatch=useDispatch()
  const { activCategory} = useSelector((state)=>state.filtre)
  return (
    
      <ul className="categoory_list">
        {dataCategory.map((item, idx) => (
          <li
            onClick={() =>restpageCount(idx) }
            key={idx}
            className={activCategory === idx ? "activ_category" : ''}
          >
            {item}
          </li>
        ))}
      </ul>
   
  );
}

export default Category;
