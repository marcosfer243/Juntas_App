import React from 'react'

//Components
import TripItem from './TripItem'

function MyTripsContainer() {
  const [isCurrentTrip, setIsCurrentTrip]=React.useState(true)
  return (
    <div className='flex-col' >
                <div className="flex items-center justify-between" >
          <div className="flex  w-full items-center justify-between" >
          <button
             onClick={() => setIsCurrentTrip(true)}
             style={{borderTopLeftRadius:"16px", borderBottomLeftRadius:"16px", boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}
              className={isCurrentTrip===true? "tab-btn p-2 w-3/6 active-btn":"tab-btn p-2 w-3/6"} >En Curso</button>
          <button
                 onClick={() => setIsCurrentTrip(false)}
                 style={{borderBottomRightRadius:"16px", borderTopRightRadius:"16px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}
                  className={isCurrentTrip===false? "tab-btn p-2 w-3/6 active-btn":"tab-btn p-2 w-3/6"}>Anteriores</button>    
          </div>
          </div>
          <div className="trips-grid-container  pb-5 max-sm:pb-20">
        {isCurrentTrip === true?(
          <>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          </>
        ):(
        <>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
          <TripItem/>
        </>
        )}
        </div>
    </div>
  )
}

export default MyTripsContainer