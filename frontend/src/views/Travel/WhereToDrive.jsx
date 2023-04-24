import React from "react";
import { check, driver, position } from "../../assets/images";
import MapsDriverData from "../../components/MapsDriverData";
import UploadDni from "../../components/UploadDni";

const WhereToDrive = () => {
  return (
    <div className="w-full py-[1rem] px-[2rem]">
      <h2 className="text-[30px] md:text-[50px] font-bold mb-4">
        Soy Conductora
      </h2>
      <div className="relative flex justify-between w-full md:w-[567px] mx-auto my-[4rem]">
        <div className="bg-[#5CBA2A] flex justify-center items-center rounded-full z-40">
          <img
            src={position}
            alt="position-driver"
            className="w-[30px] h-[30px] p-1"
          />
        </div>
        <div className="bg-[#5CBA2A] flex justify-center items-center rounded-full z-40">
          <img
            src={driver}
            alt="driver-car"
            className="w-[30px] h-[30px] p-1"
          />
        </div>
        <div className="bg-[#5CBA2A] flex justify-center items-center rounded-full z-40">
          <img src={check} alt="check" className="w-[30px] h-[30px] p-1" />
        </div>
        <div className="w-full h-[2px]  absolute border-2 border-black top-[50%]"></div>
      </div>

      <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-12 grid-rows-1">
        <div id="map" className="col-span-4">
          <MapsDriverData />
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
            <div className="col-span-1">
              <h2>¿Hacia donde conducís?</h2>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Desde</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <select
                id="countries"
                class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Hacia</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="col-span-1">
              <h2>¿Cuando?</h2>

              <div className=" w-full flex items-center justify-center">
                <input type="date" className="w-2rem" />
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Paradas intermedias
            </label>
            <select
              id="countries"
              class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Paradas intermedias</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="w-full gap-10 grid grid-cols-1 md:grid-cols-2 grid-rows-1">
            <div className="col-span-1 w-full">
              <h3 class="my-4 font-semibold text-gray-900 dark:text-white">
                Cantidad de Asientos
              </h3>

              <div className="flex items-center justify-between">
                <h2 className="mr-5">Adultos </h2>
                <ul class="items-center w-[50%] text-sm font-medium text-gray-900  rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="vue-checkbox-list"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        1
                      </label>
                    </div>
                  </li>
                  <li class="w-full ">
                    <div class="flex items-center pl-3">
                      <input
                        id="react-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="react-checkbox-list"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2
                      </label>
                    </div>
                  </li>
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="angular-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="angular-checkbox-list"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        3
                      </label>
                    </div>
                  </li>
                  <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                      <input
                        id="laravel-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="laravel-checkbox-list"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="mr-5">Adultos mayores</h2>
                <ul class="items-center w-[50%] text-sm font-medium text-gray-900  rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="adultos-mayores-1"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="adultos mayores-1"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        1
                      </label>
                    </div>
                  </li>
                  <li class="w-full ">
                    <div class="flex items-center pl-3">
                      <input
                        id="adultos-mayores-2"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="adultos-mayores-2"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2
                      </label>
                    </div>
                  </li>
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="adultos-mayores-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="adultos-mayores-3"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        3
                      </label>
                    </div>
                  </li>
                  <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                      <input
                        id="adultos-mayores-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="adultos-mayores-3"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="mr-5">Menores</h2>
                <ul class="items-center w-[50%] text-sm font-medium text-gray-900  rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="menores-1"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="menores-1"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        1
                      </label>
                    </div>
                  </li>
                  <li class="w-full ">
                    <div class="flex items-center pl-3">
                      <input
                        id="menores-2"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="menores-2"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2
                      </label>
                    </div>
                  </li>
                  <li class="w-full">
                    <div class="flex items-center pl-3">
                      <input
                        id="menores-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="menores-3"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        3
                      </label>
                    </div>
                  </li>
                  <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                      <input
                        id="menores-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="menores-3"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 w-full md:pl-[1.5rem]">
              <h3 class="my-4 font-semibold text-gray-900 dark:text-white">
                Tus Condiciones
              </h3>

              <div class="">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepto Gatos
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-2-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepto perros
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    checked
                    id="inline-3-checked-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-checked-3-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    equipaje por persona
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    checked
                    id="inline-checked-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-checked-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepta fumador
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    checked
                    id="inline-checked-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-checked-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepta Niños
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t-black grid gap-5 grid-cols-1 md:grid-cols-12 grid-rows-1 mt-7">
        <div className="col-span-4">
          <h2 className="text-center font-bold text-[30px]">Tu vehiculo</h2>
          <div className="">
            <h2>¿Hacia donde conducís?</h2>
            <select
              id="countries"
              class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Patente</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <select
              id="countries"
              class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Modelo</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <select
              id="countries"
              class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Marca</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <select
              id="countries"
              class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Color</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="text-right">
            <button
              type="button"
              class="text-black bg-[#3BED1E]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Cargar
            </button>
          </div>
        </div>

        <div className="col-span-8">
          <h2 className="text-center font-bold text-[30px]">
            Carga tu Carnet de Conducir
          </h2>
          <UploadDni />
        </div>
      </div>

      <div className="text-right">
        <button
          type="button"
          class="text-black bg-[#ED1E79]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Cargar
        </button>
      </div>
    </div>
  );
};

export default WhereToDrive;
