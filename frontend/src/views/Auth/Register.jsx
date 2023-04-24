import RegisterForm from "./../../components/RegisterForm";


//Hooks
import {useMobile} from "./../../hooks/useMobile.js";

//img
import  registerViewPic  from "./../../assets/auth/register-view-pic.png";



const Register = () => {


  const isMobile = useMobile();
    return (
      <div style={{padding:"0",maxHeight:"165vh",zIndex:"-10"}}  className='w-full flex max-md:flex-col justify-around items-center bg-white' >
    {isMobile?(<></>):(
    <div style={{ backgroundImage:`url(${registerViewPic})`,minHeight:"160vh", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='w-3/6 max-md:w-full relative hidden md:block'>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize:"40px",
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        textAlign:"center",
        width:"90%",
        wordBreak:"keep-all",
      }}>
        <h1>Mayor<strong> seguridad, comodidad y confianza</strong> en cada viaje.</h1>
      
      </div>
      </div>
    )}
      <div className='flex items-center w-full md:w-3/6 p-7 justify-center'>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register


