import React,{useState, useEffect} from 'react'

//React router
import { useLocation } from 'react-router-dom';

//Icons
import {
  edit,
  movil,
  cake,
  instagram,
  facebook,
  email,
} from "../../assets/images";


//React-redux
import { useSelector } from "react-redux";

//Components
import Tabs from "../../components/Tabs";
import ModalEditProfile from "../../components/ModalEditProfile";
import ModalEditProfilePic from "../../components/ModalEditProfilePic";

function MyProfileView() {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowPic, setModalShowPic]=React.useState(false)
  const {currentUser} = useSelector((state)=>state.user)
  const [userEmail, setUserEmail] = useState("")
  const location = useLocation()

  useEffect(() => {
 const email =  localStorage.getItem("email");
 setUserEmail(email)
  }, [location.pathname])

  //https://randomuser.me/api/portraits/women/90.jpg

  //currentUser.profileImage? currentUser.profileImage : noImage

  return (
    <>
       <ModalEditProfile show={modalShow} onHide={() => setModalShow(false)} />
      <ModalEditProfilePic
        show={modalShowPic}
        onHide={() => setModalShowPic(false)}
      /> 
      <div className="profile-container flex max-sm:flex-col overflow-x-hidden items-start justify-center">
        <div
          style={{ alignSelf: "center" }}
          className="container-column flex-col justify-around items-center w-2/6
            pt-5
            p-3 max-sm:w-11/12  max-sm:p-0" >
              <h2 style={{textAlign:"center"}} >Mi perfil</h2>
        <div style={{borderBottom:"0.09px solid gray", marginBottom:"15px"}} className='flex-col items-center' >

               <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}} className='myprofile-data relative pt-2 rounded-lg' >
                  <img style={{borderRadius:"50%", border:"2px solid #3BED1E "}} src={`https://randomuser.me/api/portraits/women/95.jpg`} alt='woman-pic' ></img>
                  <span style={{fontSize:"30px"}}><strong>
                    Martina Lopez
                 </strong></span>
                  <img onClick={() => setModalShowPic(true)} style={{position:"absolute",top:"10px", left:"70%", height:"20px", cursor:"pointer"}} src={edit} alt="edit_icon.svg" ></img>
                </div>
        <div style={{margin:"none", borderTop:"0.09px solid gray"}} className='userdata-container relative flex-col mt-3' >
            <ul className='p-4  md:p-6'  >
                   <li className='flex pb-2' >
                  <img className='pr-4'  src={movil} alt="cellphone-icon"></img>
                      Agrega tu número de teléfono
                    </li>
                    <li className='flex pb-2 ' >
                      <img className='pr-4'  style={{height:"20px"}} src={cake} alt="cake-icon"></img>
                     15/05/1999
                    </li>
                    <li className='flex pb-2 ' >
                       <img className='pr-4'  src={facebook} style={{height:"22px"}} alt="facebook-icon"></img>
                        Agrega tu link de facebook
                    </li>
                    <li className='flex pb-2' >
                        <img className='pr-4'  src={instagram} alt="instagram-icon.svg"></img>
                           Agrega tu link de instagram
                    </li>
                    <li className='flex pb-2' >
                        <img className='pr-4'  src={email} alt="email-icon.svg"></img>
                           marti_lopez@gmail.com
                    </li>
            </ul>
                   <img onClick={() => setModalShow(true)} style={{position:"absolute",top:"10px", left:"90%", height:"20px", cursor:"pointer"}} src={edit} alt="edit_icon.svg" ></img>

        </div>
              </div>
        </div>
        <div className="container-column flex-col items-center w-4/6  max-sm:w-11/12  max-sm:p-0">
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default MyProfileView;
