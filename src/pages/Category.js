import React from 'react'
import { Link,  Route, Routes, useMatch } from 'react-router-dom'
import Cat from './Cat'
const Category = () => {
    const {url , path}= useMatch();
  return (
    <>
    <div> <h2>Choose Category</h2>
     <Routes>
    <Route>
    <ul>
        <li>
            <Link to = {`${url}/121`}> L1 </Link>
        </li>
        <li>
            <Link to ={`${url}/122`}> L2 </Link>
        </li>
    </ul>
    </Route>
    
    <Route path= {`${path}/:id`} element={<Cat/>} />
    </Routes>

    </div>


      
    </>
  )
}

export default Category
