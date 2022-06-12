import React from 'react'
import { Link,  Outlet,  Route, Routes, useNavigate } from 'react-router-dom'
import Cat from './Cat'
const Category = () => {
  return (
    <>
    <div> 
      <h3>Choose Category</h3>

    <ul>
        <li>
           <button> <Link to = {`/category/121`}> L1 </Link></button>
        </li>
        <li>
           <button> <Link to ={`/category/122`} style={{color:'green'}}> L2 </Link></button>
        </li>
    </ul>

    <Outlet/>
      
    </div>

  
    </>
  )
}

export default Category
