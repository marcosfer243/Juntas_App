import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/logo.svg";

const navigation = [
  { name: "Perfil", href: "/myprofile" },
  { name: "Mis viajes", href: "/trips" },
  { name: "Mi calificación", href: "/score" },
  { name: "Como funciona", href: "/faq" },
];

const user = localStorage.getItem("token");

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppNavbar = () => {
  const navigate = useNavigate();

  // const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Disclosure as="nav" className="bg-[#ED1E79]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 px-md-2 px-lg-3">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center d-md-none d-lg-none">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="d-flex flex-grow-1 align-items-center justify-content-start flex-sm-nowrap justify-content-sm-center justify-content-md-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-16 d-lg-none"
                      src={Logo}
                      alt="juntas-logo"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden h-16 d-lg-block"
                      src={Logo}
                      alt="juntas-logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 position-static mx-auto ml-sm-6 pr-sm-0 ">
                {/* Profile dropdown */}
                {!user ? (
                  <div className="d-sm-none d-md-flex">
                    <button className="text-pink-600 bg-white rounded p-1 border-white">
                      <Link
                        to="/login"
                        className="text-decoration-none text-[#ED1E79]"
                      >
                        Iniciar sesion
                      </Link>
                    </button>
                    <Link
                      className="text-white p-1 text-decoration-none"
                      to="/register"
                    >
                      Registrate
                    </Link>
                  </div>
                ) : (
                  <>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <UserCircleIcon className="h-8 w-8 rounded-full text-white" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {navigation.map((item, idx) => {
                            return (
                              <Menu.Item key={idx}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-black"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            );
                          })}
                          <hr />
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className="px-4 py-2 text-sm text-[#ED1E79]"
                                onClick={handleLogout}
                              >
                                Cerrar Sesión
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <button
                      type="button"
                      className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-white focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-white focus:ring-offset-2"
                    >
                      <span className="sr-only">Search</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="d-lg-none">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {!user ? (
                <>
                  <button className="text-pink-600 bg-white rounded p-1 border-white">
                    <Link
                      className="text-decoration-none text-[#ED1E79]"
                      to="/login"
                    >
                      Iniciar sesion
                    </Link>
                  </button>
                  <Link
                    className="text-white p-1 ml-4 text-decoration-none"
                    to="/register"
                  >
                    Registrate
                  </Link>
                </>
              ) : (
                <>
                  {navigation.map((item) => (
                    <>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                      <hr className="text-white" />
                    </>
                  ))}
                  <button
                    className="px-3 py-2 text-base font-medium text-gray-300 hover:bg-white hover:text-[#ED1E79]"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AppNavbar;