import { useState } from "react";

//Components
import Documents from "./Documents";
import NoteItem from "./NoteItem";
import MyTripsContainer from "./MyTripsContainer";
import NoteItemMobile from "./NoteItemMobile";

//Hooks
import { useMobile } from "./../hooks/useMobile.js";

//Icons
import {
  mydocuments_active,
  mydocuments,
  myratings_active,
  myratings,
  mytrips,
  mytrips_active,
} from "../assets/images";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [driver, setDriver] = useState(1);

  const isMobile = useMobile();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleDriver = (index) => {
    setDriver(index);
  };

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              <img src={toggleState === 1 ? mydocuments_active : mydocuments} />
            </>
          ) : (
            <>Mis documentos</>
          )}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              <img src={toggleState === 2 ? myratings_active : myratings} />
            </>
          ) : (
            <>Mis calificaciones</>
          )}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              <img src={toggleState === 3 ? mytrips_active : mytrips} />
            </>
          ) : (
            <>Mis viajes</>
          )}
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Documents />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="flex items-center justify-between">
            <div className="flex  w-full items-center justify-between">
              <button
                onClick={() => toggleDriver(1)}
                style={{
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  fontSize: isMobile ? "12px" : "18px",
                }}
                className={
                  driver === 1
                    ? "tab-btn p-2 w-3/6 active-btn"
                    : "tab-btn p-2 w-3/6"
                }
              >
                Como conductora
              </button>
              <button
                onClick={() => toggleDriver(2)}
                style={{
                  borderBottomRightRadius: "16px",
                  borderTopRightRadius: "16px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  fontSize: isMobile ? "12px" : "18px",
                }}
                className={
                  driver === 2
                    ? "tab-btn p-2 w-3/6 active-btn"
                    : "tab-btn p-2 w-3/6"
                }
              >
                Como pasajera
              </button>
            </div>
          </div>
          <div className="calificacion-container pt-1 pb-5 max-sm:pb-20">
            {isMobile ? (
              <>
                {driver === 1 ? (
                  <>
                    <NoteItemMobile />
                    <NoteItemMobile />
                  </>
                ) : (
                  <>
                    <NoteItemMobile />
                    <NoteItemMobile />
                    <NoteItemMobile />
                    <NoteItemMobile />
                  </>
                )}
              </>
            ) : (
              <>
                {driver === 1 ? (
                  <>
                    <NoteItem />
                    <NoteItem />
                  </>
                ) : (
                  <>
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <MyTripsContainer />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
