import React from 'react'

import { driver, gas, flag, money } from '../assets/images'

const CarInfoItem = ()=>{
  return(
  <div className='car_info_container flex pt-2' >
    <img src={driver} ></img>
    <ul>
      <li> Honda Fit</li>
      <li>Patente: DFG 456</li>
      <li>Color: Blanco</li>
    </ul>
    <button>Ver ficha</button>
  </div>
  )
}

function BookedTrip() {
  return (
    <div  className='booked_trip_container' >
      <div className='division_one w-3/6 pl-5'>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-2 ">
        <div className="absolute w-4 h-4 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-lg font-bold leading-none text-black dark:black">Buenos Aires</time>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-4 h-4 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-lg font-bold leading-none text-black dark:text-black">S.C Bariloche</time>
       
    </li>
      </ol>

      <CarInfoItem/>
      <ul className='mt-4 w-10/12 pr-4 pl-0' >
        <li className='flex items-center justify-between mt-1 mb-1 ' ><img src={gas}></img>
        <span>Combustible: </span>
        <span>200 litros</span>
        </li>
        <li className='flex items-center justify-between mt-1 mb-1' ><img src={flag}></img>
        <span>{`Distancia(km)`}: </span>
        <span>1568</span>
        </li>
        <li className='flex items-center justify-between mt-1 mb-1' ><img src={money}></img>
        <span>ARS: </span>
        <span>31300</span>
        </li>
      </ul>
        </div>    
        <div className='division_two w-3/6'>
          
<ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">                  
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 0 | 00:00hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">Av. 9 de Julio</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 2 | 00:06hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">Cruce Autopista 25 de Mayo y Av. 9 de Julio</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 100 | 3:05 hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">RN3- San Miguel del Monte</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 694 | 10:28 h</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">Cruce RN3 y RN22</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 1253 | 17:27 hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">Cruce RN22 y RN237</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 1490 | 20:24 hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">Cruce RN237 y RN40</h3>
    </li>
    <li className="mb-2 ">
        <div className="absolute w-3 h-3 bg-[#FF3A90] rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-[#FF3A90]"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Km 1622 | 22:04 hs</time>
        <h3 className="text-sm font-semibold text-black dark:text-white">S.C de Bariloche</h3>
    </li>
</ol>

        </div>
    <div className='amount'>
    <span className='text-white font-bold'>Reservalo por:</span>
    <div className='price'>
        $1500
    </div>
</div>
</div>
  )
}

export default BookedTrip