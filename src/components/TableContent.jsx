import React ,{useState,useEffect} from 'react'
import Data from './Data';
import { mockData } from '../data/mockData';  


function TableContent() {
  const [drivers,setDrivers]= useState(mockData);
  const increasePoints=()=>setDrivers([]);    
  const decreasePoints=()=>setDrivers([]);
  const driverUpdate = ()=>{
    drivers.map()
  };
  /* console.log(drivers); */

  return (
      <tbody>
       {drivers.map((element,index)=>(
        <Data  
        key={element.number}
        no={index}  
        pic={element.image}     
        name={`${element.firstName} ${element.lastName}`}
        team={element.team}
        country={element.country}
        points={element.points}
        increase={increasePoints}
        decrease={decreasePoints}
        />
       ))} 
      </tbody>
    )  
}

export default TableContent;