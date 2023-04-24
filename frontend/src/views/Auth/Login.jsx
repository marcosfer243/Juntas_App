import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="border-solid border-2 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className="login-image flex items-center p-28 sm:hidden md:hidden lg:flex">
        <h2 className="text-white text-center text-3xl relative bottom-20">
          ¡Unite a nuestra comunidad de <strong>carpooling</strong> para
          mujeres!
        </h2>
      </div>
      <div className="flex items-center p-7 justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
