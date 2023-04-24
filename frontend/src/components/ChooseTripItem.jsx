import React from 'react'

//React rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

//React router
import {Link} from "react-router-dom";

//HeroIcons
import {CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid'
 import { ClockIcon } from '@heroicons/react/24/outline';


function ChooseTripItem({completed, rate}) {

  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  ); // Source: https://www.svgrepo.com/svg/353297/star
    

const customStyles = {
    
    itemShapes: Star,
    activeFillColor: '#3BED1E',   
    inactiveFillColor: '#D9D9D9',

  };


  return (
    <div className='choose_item_container flex' >
      <div className="column_one_item w-4/6 p-1 max-sm:w-3/6">
        <div className='trip-info' >
        <div className='trip-container w-full'>
        <div className="from-class flex items-center justify-evenly">
<div></div>
<span style={{fontWeight:"bold"}} className="text-sm max-sm:text-xs" >Rosario, Santa Fé</span>
        </div>
        <div className='to-class flex items-center justify-evenly'>
          <div className='bar_' ></div>
          <span style={{fontWeight:"bold"}} className="text-sm max-sm:text-xs" >S.C de Bariloche</span>
        </div>
      </div>
        </div>
        <ul >
          <li className='flex items-center'>
            <CalendarDaysIcon className="h-6 text-white" />
            <span style={{color:"white"}}>05/05/2023</span>
          </li>
          <li className='flex items-center'>
    <ClockIcon className="h-6 text-white"  />
    <span style={{color:"white"}} >08:00hs</span>
          </li>
          <li className='flex items-center'>
            <UserIcon  className="h-6 text-white"  />
            <span style={{color:"white"}} >1</span>
          </li>
        </ul>
      </div>
      <div className='column_two_item w-2/6 max-sm:w-3/6'>
        <span className='font-bold text-white' > {completed < 30 ? "Hay lugar!" : completed < 60? "A la mitad" :"Completo"}</span>
      <div  className="w-[175px] h-6 bg-gray-200 rounded-full max-sm:w-[100px]">
  <div style={{backgroundColor:completed < 30 ? "#3BED1E" : completed < 60? "yellow" :"#A00A4C" , width:`${completed}%`}} className="h-6 rounded-full text-white">
  </div>
</div>
<img src="https://randomuser.me/api/portraits/women/29.jpg" ></img>
<span>Conducido por: <strong>Catalina Gomez</strong></span>
      <Rating
      style={{ maxWidth: 180 }}
      value={rate}
      itemStyles={customStyles}
      readOnly
    />
   <button className='max-sm:text-sm' ><Link to='/selectedtrip' >Ver Viaje</Link></button>
      </div>
    </div>
  )
}

export default ChooseTripItem