import { useState, useEffect } from "react";

//React PDF
import { PDFDownloadLink } from "@react-pdf/renderer";

//Icons
import { download } from "../assets/images";

//React-redux
import { useSelector } from "react-redux";

//Components
import Spinner from "./Spinner";
import TandConditionsPdf from "./TandConditionsPdf";
import AccountModal from "./AccountModal";

const TermsAndConditions = ({ userRegistered }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleRegister = (user) => {
    setOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",

              borderRadius:"16px"
          }}
          className="p-3 rounded-[20px] max-sm:w-screen"
        >
          <div
            style={{ height: "600px"}}
            className="terms relative flex-col overflow-y-auto text-justify break-word hyphens-auto bg-white px-2 pt-5 pb-2"
          >
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0  w-full stroke-gray-200]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                />
              </svg>
            </div>
            <div className="flex-col">
              <div className="">
                <div className="lg:pr-4">
                  <div className="text-center ">
                    <p className="text-start font-semibold text-indigo-600">
                      Importante
                    </p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 ">
                      Terminos y condiciones
                    </h1>
                    <p className="mt-1 text-xl text-justify leading-8 text-gray-700">
                      Previo a la creación del perfil debes aceptar los términos
                      y condiciones.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="w-full ">
                  <div className="w-full text-base leading-7 text-gray-700 ">
                    <p>
                      Bienvenido(a) a “Juntas” una aplicación de viajes
                      especialmente realizada para mujeres. Al utilizar nuestros
                      servicios, usted acepta los siguientes términos y
                      condiciones.
                    </p>
                    <ul role="list" className="mt-6 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <span>
                          1.
                          <strong className="font-semibold text-gray-900">
                            {" "}
                            Registro de usuarios:
                          </strong>{" "}
                          para poder utilizar nuestra aplicación, es necesario
                          que se registre proporcionando sus datos personales,
                          incluyendo su nombre, correo electrónico y documentos
                          personales. Estos datos serán resguardados y
                          protegidos bajo nuestra política de privacidad, y solo
                          serán visibles para entidades gubernamentales en caso
                          de ser requeridos por la ley.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          2.
                          <strong className="font-semibold text-gray-900">
                            {" "}
                            Uso de la aplicación:
                          </strong>{" "}
                          nuestra aplicación está diseñada para ser utilizada
                          exclusivamente por mujeres. Al utilizar nuestra
                          aplicación, usted se compromete a respetar las
                          condiciones de uso y a no utilizarla para fines
                          ilegales o inapropiados.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          3.
                          <strong className="font-semibold text-gray-900">
                            {" "}
                            Responsabilidad del usuario:
                          </strong>{" "}
                          el usuario es responsable de la veracidad de los datos
                          proporcionados durante el registro. Asimismo, es
                          responsable de mantener actualizados sus datos
                          personales en la aplicación.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          4.
                          <strong className="font-semibold text-gray-900">
                            {" "}
                            Cancelacion de Servicio:
                          </strong>{" "}
                          nos reservamos el derecho de cancelar el servicio a
                          cualquier usuario que incumpla con estos términos y
                          condiciones, sin previo aviso.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          5.
                          <strong className="font-semibold text-gray-900">
                            {" "}
                            Modificaciones a los terminos y condiciones:
                          </strong>{" "}
                          nos reservamos el derecho de modificar estos términos
                          y condiciones en cualquier momento y sin previo aviso.
                          Es responsabilidad del usuario estar al tanto de los
                          cambios realizados.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          Al utilizar nuestros servicios, usted acepta estos
                          términos y condiciones en su totalidad.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          Si no está de acuerdo con alguno de los términos o
                          condiciones establecidos, le pedimos que no utilice
                          nuestra aplicación. Gracias por utilizar nuestra
                          aplicación de viajes “Juntas”, esperamos que la
                          disfrutes.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          <strong>
                            Descargo de Responsabilidad - Disclaimer
                          </strong>
                        </span>
                      </li>
                    </ul>
                    <p className="mt-1">
                      Nuestra aplicación de viajes “Juntas” no se hace
                      responsable de los accidentes, lesiones, pérdidas, daños o
                      gastos que puedan ocurrir durante o como resultado del uso
                      de nuestros servicios. El usuario es responsable de su
                      propia seguridad durante el uso de la aplicación y debe
                      tomar las medidas necesarias para garantizar su bienestar.
                      Nuestra aplicación no se hace responsable de ninguna forma
                      por cualquier problema que pueda surgir durante el uso de
                      nuestros servicios. Al utilizar nuestra aplicación, el
                      usuario reconoce y acepta que está utilizando nuestros
                      servicios bajo su propio riesgo y responsabilidad. Nuestra
                      aplicación no será responsable de ningún daño directo,
                      indirecto, incidental, especial o consecuente que surja
                      del uso de nuestros servicios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-[5rem] max-sm:flex-col max-sm:h-[10rem]">
              <button
                onClick={() => handleRegister(userRegistered)}
                className="px-5 h-3/6 max-sm:py-2 max-sm:m-0 "
                style={{
                  backgroundColor: "#ED1E79",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                ACEPTAR
              </button>
              <AccountModal open={open} />

              <PDFDownloadLink
                document={<TandConditionsPdf />}
                fileName="TerminosYCondiciones-JuntasApp.pdf"
              >
                <button
                  className="px-5 m-5 h-full flex justify-around py-2 items-center max-sm:h-2/6"
                  style={{
                    width: "140px",
                    backgroundColor: "#16A000",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  DESCARGAR
                  <img src={download} style={{ marginLeft: "5px" }}></img>
                </button>
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
