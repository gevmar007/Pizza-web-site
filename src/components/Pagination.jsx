import React from 'react'
import ReactPaginate from 'react-paginate'
import {setPageCount} from "../redax/slice/FiltreSlice"
import { useDispatch, useSelector } from 'react-redux'
function Pagination() {
   const {pageCount} = useSelector((state)=>state.filtre)
   const dispatch=useDispatch()
   console.log(pageCount);

   const hadlePageCount=(e)=>{
    dispatch(setPageCount(e.selected + 1))
 
   }
  return (
   

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        forcePage={pageCount - 1}
        onPageChange={hadlePageCount}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        previousLinkClassName={"page-link"}
      
      />
    
  )
}

export default Pagination