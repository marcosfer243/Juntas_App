import {
  GoogleMap,
  LoadScript,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { Button, Form, Modal } from "react-bootstrap";
import { cities } from "../../assets/cities";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -35.21771789700376,
  lng: -65.30470872298973,
};
const conditions = [
  {
    label: "allowPets",
    value: "Petfriendly",
  },
  {
    label: "allowSmoke",
    value: "Acepta Fumador",
  },
  {
    label: "bag",
    value: "Equipaje",
  },
  {
    label: "allowKids",
    value: "Acepta niños",
  },
];
const bag = [
  {
    label: "big",
    value: "Grande (70x120)",
  },
  {
    label: "medium",
    value: "Mediano (50x90)",
  },
  {
    label: "small",
    value: "Chico (50x40)",
  },
];
const medical = [
  {
    label: "Alergy",
    value: "Alergia",
  },
  {
    label: "wheelchair",
    value: "Silla de ruedas",
  },
  {
    label: "Medication",
    value: "Medicacion",
  },
  {
    label: "Other",
    value: "Otra info necesaria",
  },
];

const BeginTrip = () => {
  const [originCoords, setOriginCoords] = useState([]);
  const [destinyCoords, setDestinyCoords] = useState([]);

  const navigate = useNavigate();

  const setOrigin = (origin) => {
    setOriginCoords(origin);
    localStorage.setItem("origin", JSON.stringify(origin));
  };

  const setDestination = (destiny) => {
    setDestinyCoords(destiny);
    localStorage.setItem("destination", JSON.stringify(destiny));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/choose");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <LoadScript googleMapsApiKey={`${import.meta.env.VITE_GMAPS_KEY}`}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
            >
              <MarkerF position={originCoords} />
              <MarkerF position={destinyCoords} />

              <PolylineF
                path={[originCoords, destinyCoords]}
                options={{
                  strokeColor: "#A00A4C",
                  strokeOpacity: 1.0,
                  strokeWeight: 4,
                  geodesic: true,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="col-md-8">
          <div className="text-center">
            <h2>¿A dónde querés ir?</h2>
            <h5>Buscá a tu conductora</h5>
          </div>
          <br />
          <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-around">
              <Form.Select aria-label="Default select example">
                <option selected disabled>
                  Desde
                </option>
                {cities.map((c, idx) => (
                  <option value={idx} onClick={() => setOrigin(c.coords)}>
                    {c.city}
                  </option>
                ))}
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option selected disabled>
                  Hasta
                </option>
                {cities.map((c, idx) => (
                  <option value={idx} onClick={() => setDestination(c.coords)}>
                    {c.city}
                  </option>
                ))}
              </Form.Select>
            </div>
            <br />
            <div className="row justify-content-around">
              <div className="col-md-4">
                <input type="date" required className="d-flex " />
              </div>
              <div className="col-md-4">
                <h5>¿Cuántas son?</h5>
                <br />
                <div>
                  <label className="text-sm" htmlFor="adults">
                    Adultos
                  </label>
                  <input className="ml-6" required name="adults" type="radio" />
                  <input className="ml-6" name="adults" type="radio" />
                  <input className="ml-6" name="adults" type="radio" />
                </div>
                <div>
                  <label className="text-sm" htmlFor="olders">
                    Adultos Mayores
                  </label>
                  <input className="ml-4" name="olders" type="radio" />
                  <input className="ml-4" name="olders" type="radio" />
                  <input className="ml-4" name="olders" type="radio" />
                </div>
                <div>
                  <label className="text-sm" htmlFor="youngest">
                    Menores
                  </label>
                  <input className="ml-4" name="youngest" type="radio" />
                  <input className="ml-4" name="youngest" type="radio" />
                  <input className="ml-4" name="youngest" type="radio" />
                </div>
                <br />
                <br />
                <p className="text-center text-[#ED1E79]">
                  ¡Ayuda a la conductora a brindar un viaje seguro y cómodo para
                  todos las pasajeras!
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 row">
                <div className="col-md-6">
                  <h5 className="font-semibold text-center">Preferencias</h5>
                  <br />
                  {conditions.map((c, idx) => {
                    return (
                      <div
                        key={idx}
                        className="mb-4 flex justify-content-center"
                      >
                        <label htmlFor={c.label}>{c.value}</label>
                        <input
                          className="ml-4"
                          name={c.label}
                          type="checkbox"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="col-md-6">
                  <h5 className="font-semibold text-center">Equipaje</h5>
                  <br />
                  {bag.map((c, idx) => {
                    return (
                      <div
                        key={idx}
                        className="mb-4 flex justify-content-center"
                      >
                        <label htmlFor={c.label}>{c.value}</label>
                        <input
                          className="ml-4"
                          name={c.label}
                          type="checkbox"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6 d-flex flex-col align-items-center">
                <h5 className="font-semibold text-center mb-4">
                  Información Física y de Salud
                </h5>

                {medical.map((c, idx) => {
                  return (
                    <div key={idx} className="mb-4">
                      <label htmlFor={c.label}>{c.value}</label>
                      <input
                        className="ml-4 border border-dark"
                        name={c.label}
                        type="text"
                      />
                    </div>
                  );
                })}
                <Button
                  type="submit"
                  className="rounded border-0 px-5 py-3 mb-4"
                  style={{ backgroundColor: "#ED1E79" }}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BeginTrip;
