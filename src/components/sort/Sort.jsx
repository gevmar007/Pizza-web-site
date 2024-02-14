import React, { useEffect, useState } from "react";
import "./sort.css";
import { useDispatch, useSelector } from "react-redux";
import {setOptionClicke}from "../../redax/slice/FiltreSlice"

const sortListArr = [
  { type: "популярности(2-1)", sortProperty: "-reting" },
  { type: "популярности(1-2)", sortProperty: "reting" },
  { type: "ппо цене(2-1)", sortProperty: "-price" },
  { type: "ппо цене(1-2)", sortProperty: "price" },
  { type: "по алфавиту(A-Z)", sortProperty: "-title" },
  { type: "по алфавиту(Z-A)", sortProperty: "title" },
];

function Sort() {
  const [activSort, setActivSort] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(sortListArr[0].type);
  const dispatch=useDispatch()
  const {sort} =useSelector((state)=>state.filtre)
  

  const handleOptionClick = (obj, e) => {
    e.stopPropagation();
    dispatch(setOptionClicke(obj))

    // setSelectedOption(sortListArr[idx].type);

    setActivSort(false);
  };

  const handleOnclick = (e) => {
    e.stopPropagation();
    setActivSort(!activSort);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setActivSort(false);
    });
  }, []);

  return (
    <div className="parent_sort">
      <p className="sort_parent" onClick={handleOnclick}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        Сортировка по:
        <span className="activ_itemSort">{sort.type}</span>
      </p>
      {activSort && (
        <div className="sort_list">
          <ul className="sort_listUl">
            {sortListArr.map((obj, idx) => (
              <li
                key={idx}
                onClick={(e) =>handleOptionClick(obj, e) }
                className={sort === obj ? "list_Arr" : ""}
              >
                {obj.type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
