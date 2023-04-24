import React from 'react';

//React router dom
import {Link} from "react-router-dom"

//React bootstrap
import Button from "react-bootstrap/Button"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



function TripItem() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Ver perfil
    </Tooltip>
  );


  return (
    <div className="trip-item-container w-11/12 max-sm:w-full mt-2 mb-3 max-sm:mb-2 p-1 relative ">
      <div className='header-container flex items-center justify-around'>
        <div className='title-container text-center w-full'>
          <span className='text-xl max-sm:text-sm' ><strong>Jueves 14 de Abril 2023</strong></span>
          <span style={{fontWeight:"bold", fontSize:"18px"}} >10:20hs</span>
        </div>
      </div>
      <div className='trip-container'>
        <div className="from-class flex items-center justify-evenly">
<div></div>
<span style={{fontWeight:"bold"}} className="text-sm max-sm:text-xs" >S.Fdo. V de Catamarca</span>
        </div>
        <div className='to-class flex items-center justify-evenly'>
        <div className="bar" ></div>
          <div></div>
          <span style={{fontWeight:"bold"}} className="text-sm max-sm:text-xs" >S.C de Bariloche</span>
        </div>
      </div>
      <div className='flex w-full justify-end max-sm:justify-center' >
        <Link to="/tripdetail" >        
<Button className="px-3.5" style={{backgroundColor:"#3BED1E", color:"black", fontWeight:"bold", borderRadius:"20px", marginTop:"8px", fontSize:"14px"}} >Ver mas</Button>
        </Link>
      </div>
    </div>
  )
}

export default TripItem