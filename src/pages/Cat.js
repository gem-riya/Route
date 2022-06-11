import React from 'react'
import {useParams} from 'react-router-dom'

const Cat = () => {
  const {id} = useParams();
  // console.log(params);

  const data={
    '121':{
      title:"L1",
      description:"happy shopper"
    } , 
    '122':{
      title:"L2",
      description:"happy shopper"
    }
  };
  return (
    <>
      <h3>{data[id].title}</h3>
      <p>{data[id].description}</p>
    </>
  )
}

export default Cat
