import React, { useRef, useState } from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import './search.css'
import { setFilter } from "../../redax/slice/FiltreSlice";
import { useDispatch } from "react-redux";
function Search() {
  const [search,setSearch]=useState('')
  const inputElement = useRef();
  const {filter} =useSelector((state)=>state.filtre)
  const dispatch=useDispatch()
console.log(filter);
  const handleSearchInputChange = (event) => {
    dispatch(setFilter(event.target.value));
  
    setSearch(event.target.value)
  };

  const clearSearch = () => {

    setSearch('');
    dispatch(setFilter(''))
    inputElement.current.focus();
  };
  

  


 return (
    <div className="pizaSerch">
      <input type="text" placeholder="Search" className="inp"  value={search} onChange={handleSearchInputChange}  ref={inputElement}/>
      
      {
       filter && <p onClick={clearSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192
        206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3
        256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
       </p>
      }

       
     
    </div>
  );  
}


  

export default Search;
