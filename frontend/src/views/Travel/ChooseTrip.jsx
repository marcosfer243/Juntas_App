import React from "react";

import ChooseTripItem from "./../../components/ChooseTripItem";

function ChooseTrip() {
  return (
    <div className="choose_trip_container">
      <div className="column_one pt-7">
        <h3>Elegí tu mejor opcíon</h3>
        <span>Podés elegir tus preferencias!</span>
        <div className="list pt-4">
          <div className="flex items-center justify-between">
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-black dark:text-gray-300"
            >
              Pet friendly
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              for="checked-checkbox"
              className="ml-2 text-sm font-medium text-black dark:text-gray-300"
            >
              Acepta fumador
            </label>
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-black dark:text-gray-300"
            >
              Acepta niños
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              for="checked-checkbox"
              className="ml-2 text-sm font-medium text-black dark:text-gray-300"
            >
              Acepta equipaje
            </label>
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="column_two flex-col w-4/6 h-11/12 overflow-y-auto">
        <ChooseTripItem completed={50} rate={4} />
        <ChooseTripItem completed={100} rate={2} />
        <ChooseTripItem completed={20} rate={5} />
      </div>
    </div>
  );
}

export default ChooseTrip;
