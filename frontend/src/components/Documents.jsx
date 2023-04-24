import React from 'react'

//Icons
import { dniFront, dniBack, carnetBack, carnetFront } from '../assets/images';

function Documents() {
  return (
    <div style={{ height:"27rem"}} className='flex-col items-center justify-center overflow-y-auto pb-4' >
        <div style={{borderBottom:"1px solid #BCC2C8"}} className='flex-col pb-2'>
            <h4>D.N.I:</h4>
            <div className='flex max-sm:flex-col justify-around items-center' >
            <img style={{height:"120px", width:"200px",
             boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              borderRadius:"10px"}}  src={dniFront} alt="dni-front/png" ></img>
            <img style={{height:"120px", width:"200px",
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
             borderRadius:"10px"}}   src={dniBack} alt="dni-back/png" ></img>
            </div>
        </div>
        <div className='flex-col mt-2'>
            <h4>Licencia de conducir:</h4>
            <div className='flex max-sm:flex-col justify-around items-center' >
            <img style={{height:"120px", width:"200px",
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", 
            borderRadius:"10px"}}  src={carnetFront} alt='carnet-Back.png' ></img>
            <img style={{height:"120px", width:"200px",
            oxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
             borderRadius:"10px"}}   src={carnetBack} alt='carnet-front.png' ></img>
            </div>
        </div>
    </div>
  )
}

export default Documents