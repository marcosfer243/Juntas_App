import React from "react"

import { imagedni } from "../assets/images";

const UploadDni = () => {

  const[fileNameFrontal, setfileNameFrontal] = React.useState("")
  const[fileNameBack, setfileNameBack] = React.useState("")


function handleInputChangeBack(e) {
  const file = e.target.files[0]
  setfileNameBack(file.name)
}

function handleInputChange(e) {
  const file=e.target.files[0]
  setfileNameFrontal(file.name)
}

  return (
    <div className="flex mt-5 w-full px-1">
      <div className="flex-column items-center p-2 justify-center w-full">
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-900  "
        >
          Foto frontal:
        </label>
        <label
          htmlFor="frontal"
          className="flex flex-col items-center justify-center text-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-3 pb-6">
            <img src={imagedni} />
            {
              fileNameFrontal != ""?(<>
              <span style={{fontWeight:"bold", color:"white", fontSize:"12px"}} >{fileNameFrontal}</span>
              </>):(
              <>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
              </>)
            }
          </div>
          <input onChange={handleInputChange} id="frontal" type="file" className="hidden" />
        </label>
      </div>

      <div className="flex-column items-center p-2 justify-center w-full">
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-900  "
        >
          Foto del dorso:
        </label>
        <label
          htmlFor="trasero"
          className="flex flex-col text-center  items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-3 pb-6">
            <img src={imagedni} />
            {
              fileNameBack != ""?(<>
              <span style={{fontWeight:"bold", color:"white", fontSize:"12px"}} >{fileNameBack}</span>
              </>):(
              <>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
              </>)
            }
          </div>
          <input id="trasero" onChange={handleInputChangeBack} type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadDni;
