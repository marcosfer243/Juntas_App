import React from "react";
import { Link } from "react-router-dom";

//Images and Icons
import { mapaImg } from "../../assets/images";

//Components
import BookedTrip from "../../components/BookedTrip";
import Map from "../../components/Map";

function SelectedTrip() {
  const completed = 50;

  return (
    <div className="selected_trip_container">
      <div className="container_row_one h-1/5 max-sm:flex-col max-sm-full flex">
        <div className="column_one ">
          <div
            className="user_info flex-col h-full w-10/12"
          >
            <div className="flex items-center max-sm:flex-col">
              <img
                className="mr-4"
                src="https://randomuser.me/api/portraits/women/29.jpg"
              ></img>
              <h3>
                <strong>Catalina Gomez</strong>
              </h3>
            </div>
            <span className="text-black">
              Conduce hacia tu destino:{" "}
              <strong className="text-lg">Viernes de 28 de abril</strong>
            </span>
          </div>
        </div>
        <div className="column_two flex max-sm:flex-col ">
          <div className="available flex-col w-3/6">
            <span>
              <strong>Apurate!</strong>
            </span>
            <span className=" text-black">
              {" "}
              {completed < 49
                ? "Hay lugar!"
                : completed < 65
                ? "A la mitad"
                : completed < 80 || completed < 99
                ? "Casi lleno"
                : "Completo"}
            </span>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}} className="w-[175px] h-6 bg-gray-200 rounded-full items-center ">
              <div
                style={{
                  backgroundColor:
                    completed < 30
                      ? "#3BED1E"
                      : completed < 70
                      ? "yellow"
                      : "#A00A4C",
                  width: `${completed}%`,
                }}
                className="h-6 rounded-full text-white"
              ></div>
            </div>
          </div>
          <div
            className="passengers h-full w-3/6"
          >
            <div className="flex items-center justify-around w-3/6">
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt="Rounded avatar"
              />
            </div>
            <span className="text-sm">Tres pasajeras ya reservaron</span>
          </div>
        </div>
      </div>
      <div className="container_row_two h-4/5">
        <div className="map w-2/6 ml-4 max-sm:w-full max-sm:ml-0">
          <Map />
        </div>
        <div className="column w-5/6">
          <span className="text-white p-2 font-bold" >El recorrido de Catalina</span>
          <BookedTrip />
          <button>
            <Link to="/payment">Reservar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedTrip;
