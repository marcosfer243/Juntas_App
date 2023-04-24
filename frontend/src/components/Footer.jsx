import { Instagram } from "../assets/images";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo-home.svg";

//React router dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black px-6 break-word py-3">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 text-white h-52 sm:h-auto items-center">
        <div className="w-full">
          <img className="w-64" src={Logo} alt="logo" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Home</h6>
            <br />
            <ul className="font-thin">
              <li>Soy pasajera</li>
              <li>Conduzco</li>
              <li>Viajes activos</li>
            </ul>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">
            <Link href="/profile" className="no-underline text-white">
              Perfil
            </Link>
            </h6>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold"><Link href="/profile" className="no-underline text-white">Mis Viajes</Link></h6>
            <ul></ul>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Contacto</h6>
            <br />
            <ul>
              <li className="w-max">
                <EnvelopeIcon className="w-6 inline text-white" />{" "}
                <a className="inline text-white" href="mailto:consultas@juntas.com">
                  consultas@juntas.com
                </a>
              </li>
              <li className="flex">
                <img className="mr-2" src={Instagram} alt="instagram" />
                <a href="instagram.com" className="text-white" target="_blank" rel="noreferrer">
                  @JuntasCar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start md:justify-center h-auto">
          <ul>
            <li>
              <Link href="/tyc" className=" text-white underline">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/tyc" className="text-white underline">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
