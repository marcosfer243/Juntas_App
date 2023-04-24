import React from "react";

const RecoverPassword = () => {
  return (
    <div className="bg-black h-96">
      <form action="">
        <div className="flex flex-col p-8 gap-8 justify-center align-center bg-[url(/imgrecover.png)] h-screen bg-center bg-no-repeat bg-cover">
          <h3 className="font-black text-5xl text-center ">
            ¿Olvidaste la contraseña?
          </h3>

          <p className=" text-3xl font-bold self-center">
            Podés reestablecerla colocando tu mail
          </p>
          <div className="flex self-center ">
            <h5 className="text-center font-normal text-xl self-center">
              Email
            </h5>
            <div className="flex ml-4">
              <div className="bg-[#D9D9D9] rounded-l-[10px] px-4">
                {/* <MdOutlineAlternateEmail className="  text-[#16A000] h-[50px]  w-[20px]  " /> */}
              </div>

              <input
                className="py-2  rounded-r-[10px] px-1 text-lg lg: w-96 bg-[#D9D9D9] "
                type="email"
                id="email"
                placeholder=""
              />
            </div>
          </div>

          <button
            className="bg-[#ED1E79]  text-normal  text-xl text-white rounded-[10px] cursor-pointer self-center w-[259px] h-12"
            onClick={showPopUP}
          >
            Recuperá tu contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
