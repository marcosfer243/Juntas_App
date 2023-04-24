import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Icons
import {
  accountCreatedImage,
  facebook,
  movil,
  instagram,
  cake,
} from "../../assets/images";

//Components
import NoteItem from "../../components/NoteItem";

//React bootstrap
//import Fade from 'react-bootstrap/Fade';
import Dropdown from "react-bootstrap/Dropdown";

// //React hot toast
// import toast, { Toaster } from 'react-hot-toast';

function ProfileView() {
  const [message, setMessage] = useState({
    consulta: "",
  });

  function handleChange(e) {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (message.consulta === "") {
      return;
    } else {
      setTimeout(() => {
        setMessage({ consulta: "" });
      }, 1);

       toast.success('La consulta se envió exitosamente!',{
        duration:3500,
        position:'top-center',
        style: {
           borderRadius: '10px',
           background: '#333',
           color: '#fff',
        },
       })
    }
  }

  return (
    <div className="profile-container flex max-sm:flex-col overflow-x-hidden items-center justify-center">
       <Toaster/> 
      <div className="container-column flex-col items-center w-4/6 p-3 max-sm:w-11/12  max-sm:p-0">
        <div className="username-container w-4/6 max-sm:w-full flex justify-evenly items-center p-2">
          <img
            src={`https://randomuser.me/api/portraits/women/10.jpg`}
            alt="woman-pic"
          ></img>
          <h1>María Gala</h1>
          <img src={accountCreatedImage} alt="success-icon.svg"></img>
        </div>
        <div className="userdata-container flex-col">
          <ul className="p-4  md:p-6">
            <li className="flex pb-2">
              <img className="pr-4" src={movil} alt="cellphone-icon"></img>
              1197545698
            </li>
            <li className="flex pb-2 ">
              <img
                className="pr-4"
                style={{ height: "20px" }}
                src={cake}
                alt="cake-icon"
              ></img>
              14/06
            </li>
            <li className="flex pb-2 ">
              <img
                className="pr-4"
                src={facebook}
                style={{ height: "22px" }}
                alt="facebook-icon"
              ></img>
              facebook.com/miperfiljuntas
            </li>
            <li className="flex pb-2">
              <img
                className="pr-4"
                src={instagram}
                alt="instagram-icon.svg"
              ></img>
              1197545698
            </li>
          </ul>
        </div>
        <div className="user-comments flex-col p-3">
          <h1 style={{ fontSize: "22px", marginBottom: "10px" }}>
            Querés dejarle una consulta?
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex-col w:10/12 md:w-5/6"
            style={{ display: "flex" }}
          >
            <textarea
              onChange={handleChange}
              name="consulta"
              value={message.consulta}
              title="Número máximo de caracteres es: 144"
              rows={3}
              cols={40}
              maxLength={144}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#FF3A90",
                width: "25%",
                alignSelf: "end",
                marginTop: "10px",
                borderRadius: "16px",
                paddingTop: "5px",
                paddingBottom: "5px",
                fontWeight: "bold",
                color: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="container-column w-4/6 max-sm:w-full flex-col justify-center p-2 items-center">
        <div className="select-container flex justify-between items-center px-3">
          <h2>Calificaciones</h2>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "white",
                border: "none",
                height: "30px",
                color: "black",
              }}
              variant="success"
              id="dropdown-basic"
            >
              Filtro
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#/action-1">Mas recientes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Mejores calificaciones
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Menor costo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="calificacion-container overflow-y-auto">
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
