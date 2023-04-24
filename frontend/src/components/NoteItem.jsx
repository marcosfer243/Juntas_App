import React from 'react'

//React rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function NoteItem() {

    const Star = (
        <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
      ); // Source: https://www.svgrepo.com/svg/353297/star
        

    const customStyles = {
        
        itemShapes: Star,
        activeFillColor: '#3BED1E',   
        inactiveFillColor: '#D9D9D9',

      };

  return (
    <div className='item-container m-1 max-sm:m-0 mb-4 flex-col items-center relative'>
        <div className='rating flex items-center ml-3 mr-3 justify-between'>
        <div className='userinfo flex items-center p-1'>
                <img style={{height:"40px",borderRadius:"50%"}} src="https://randomuser.me/api/portraits/women/29.jpg" alt="user_pic"></img>
                <span className="ml-2" ><strong>Ana Gonzalez</strong></span>
            </div>
            <Rating
      style={{ maxWidth: 180 }}
      value={3}
      itemStyles={customStyles}
      readOnly
    />
        </div>
        <div className='userdata-rating ml-4 p-2'>
            <p>Viajó con María de <strong>Mendoza a San Luis</strong> el 14/04/2023 a las 17hs</p>
        </div>
        <span style={{fontSize:"12px"}} className='p-1 ml-5' >Maneja con mucha seguridad y es muy atenta</span>

        <div className='flex items-center justify-end mr-5' >
        <button>Ver ruta</button>
        </div>
    </div>
  )
}

export default NoteItem