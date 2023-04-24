import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { accountCreatedImage } from "../assets/images";
import { useNavigate } from "react-router-dom";

const AccountModal = ({ open }) => {
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => console.log("")}
        static
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="flex items-center justify-center">
                        <img
                          src={accountCreatedImage}
                          alt="cuenta creada"
                          style={{ width: "5rem" }}
                          className="mx-4 rounded-full border-2 border-black"
                        />
                        <span className="font-bold text-4xl">
                          Cuenta Creada
                        </span>
                      </div>
                      <br />
                      <div className="mt-2">
                        <p className="text-center font-normal text-3xl mb-9">
                          ¡Te enviamos un Email!
                        </p>

                        <p className=" font-normal text-md">
                          Debes activar tu cuenta con el link que enviamos a tu
                          correo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-center">
                  <button
                    type="button"
                    className="rounded-md bg-[#ED1E79] px-3 py-2 w-32 text-sm font-normal text-white shadow-sm  focus:bg-pink-700"
                    onClick={() => navigate("/register/welcome")}
                  >
                    Ir al correo
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AccountModal;
