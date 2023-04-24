import Logo from "../assets/logo2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

import { email, facebook, google, key, outlook } from "../assets/images.js";
import Spinner from "./Spinner";
//Cookies
// import Cookies from "js-cookie";

//Axios
import axios from "axios";

//Redux
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../store/UserSlice";
import { login } from "../js/auth";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const setTokenToCookies = async (cookiesToken) => {
  //   Cookies.set("juntas_app_cookies", cookiesToken);
  // };

  const handleSubmit = async (user) => {
    try {
      setShow(true);
      const response = await login(user);
      dispatch(loginSuccess(response))
      setShow(false);
      navigate("/home");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="w-full login-form flex flex-col items-center">
            <div className="flex justify-center">
              <img className="w-56" src={Logo} alt="logo" />
            </div>
            <div className="p-6 w-96">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Email:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200  rounded-l-md ">
                    <img src={email} alt="email" />
                  </span>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-r-lg text-gray-900 block w-full text-sm p-2.5  bg-gray-200"
                    required
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.email}
                      </div>
                    );
                  }}
                />
              </div>
              <br />
              <br />
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Contraseña:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200  rounded-l-md">
                    <img src={key} alt="password" />
                  </span>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="rounded-r-lg text-gray-900 w-full text-sm p-2.5 bg-gray-200"
                    required
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.password}
                      </div>
                    );
                  }}
                />
              </div>
              <br />
              <Link
                className="underline text-[#616161] text-sm text-right block"
                to="/recover"
              >
                Olvidé contraseña
              </Link>
            </div>

            <div className="text-center h-28 mt-6 flex items-center">
              {show ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  className="text-white bg-[#ED1E79] shadow-lg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Inicia sesión
                </button>
              )}
            </div>
            <div className="mt-10">
              <h5>
                ¿No tenés cuenta? <strong>Registrate ahora!</strong>
              </h5>
              <br />
              <br />
              <div className="flex justify-center items-start h-20">
                <div className="flex justify-between w-3/4">
                  <img src={facebook} alt="facebook" />
                  <img src={google} alt="google" />
                  <img src={outlook} alt="outlook" />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
