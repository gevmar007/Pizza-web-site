import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Sort from "../components/sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import MyLoader from "../components/MyLoader/MyLoader";
import axios from "axios";  
import { useDispatch, useSelector } from "react-redux";
import { setpizza } from "../redax/slice/PizzaSlice";
import { setLoading } from "../redax/slice/PizzaSlice";
import searchImg from '../assets/img/smayl.png'
import Pagination from "../components/Pagination";
import { setPageCount} from '../redax/slice/FiltreSlice'
import { fetchData } from "../redax/slice/PizzaSlice";

 

function Hom() {
  // const [loading, statusLoading] = useState(false);

  const loadingIndicators = Array.from({ length: 8 }, (_, index) => index);

  const dispatch = useDispatch();

  const { dataPizza, lodingStatus } = useSelector((state) => state.slicepizza);

  const { activCategory, sort, filter,pageCount} = useSelector((state) => state.filtre);

  
  // const data = async () => {
  //   const category = activCategory > 0 ? `category=${activCategory}` : "";
  //   const sortBy = sort.sortProperty.replace("-", "");
  //   const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    
    
  //    try {
  //     const Response = await axios.get(
  //       `https://6471f2936a9370d5a41adb88.mockapi.io/users?${category}&sortBy=${sortBy}&order=${order}&search=${filter}&page=${pageCount}&limit=${3}`
  //       );
        
  //       const fetchData = Response.data;
  //       console.log(fetchData);
  //       dispatch(setpizza(fetchData));
        
        
  //     } catch (error) {}
  //   };
  
  const data =async()=>{
    const category = activCategory > 0 ? `category=${activCategory}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const apiUrl=`https://6471f2936a9370d5a41adb88.mockapi.io/users?${category}&sortBy=${sortBy}&order=${order}&search=${filter}&page=${pageCount}&limit=${3}`
    
    dispatch(fetchData(apiUrl))
    // try{

    //   const response = await axios.get(apiUrl);
      
      
    //   const fetchData = response.data;
    //         console.log(fetchData);

    //         dispatch(setpizza(fetchData));

    // }catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };
    
    

    const handlePageChange = (selectedPage) => {
     
      dispatch(setPageCount(selectedPage.selected + 1));
    };

  useEffect(() => {
 
   
    dispatch(setLoading());
    data();
  
    
    
   
  }, [activCategory, sort, filter ,pageCount,fetchData]);

  

  const pizza = dataPizza.length ? dataPizza.map((el) => <PizzaBlock key={el.id} {...el} />) : <h1 className="seachImg"> пустая <img src={searchImg}  /></h1>
  
  console.log(lodingStatus);
  const loader = loadingIndicators.map((index) => <MyLoader key={index} />);

  return (
   

    <>
      <div className="paren_sortCategory">
        <Category />
        <Sort />
      </div>
      <p className="title">Все пиццы</p>
      <div className="parent_pizzaBlock">
        {/* {lodingStatus==='succeeded' ? pizza : loader} */}
        {/* {setLoading==='failed' && <div>tvyalnery bacakayum en</div>} */}
        {lodingStatus === 'failed'? (
          
          <div>tvyalner chkan</div>

        ): (
          lodingStatus === 'pending' ? loader : pizza
        )}
      </div>
        
      <div className="parent_pagination">
    <Pagination handlePageChange={handlePageChange}/>
      </div>
     
    </>
  );
}

export default Hom;



// 1 2 3

// I

// I === 3 ? ERROR : I === 2 ? ZAGRU : 