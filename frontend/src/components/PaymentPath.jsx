import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { PaypalFrame, bankTransfer, checkBank, groupCheckBank, mercadoPagoFrame, warningFrame } from '../assets/images';
import { Field, Form, Formik } from 'formik';

const ModalTransferSuccess=()=>{

    return(

        <div  className='w-full h-screen flex items-center justify-center absolute top-0 left-0 right-0 bottom-0' style={{background:"#00000085"}} >
            <div className=' flex items-center justify-center rounded px-5 py-3 w-[300px] md:w-[645px] bg-white opacity-1 border-black' onClick={()=> setShowBankModal(!showBankModal)} >
                <div className='mx-4'>
                    <img src={groupCheckBank} alt="group" />
                </div>
                <div className='mx-4'>
                    <h2 className='font-bold'>¡Transferencia exitosa!</h2>
                    <p>
                    Te enviamos un mail
                    con el comprobante de pago
                    </p>
                    <div className='text-end'>
                        <Link to={"/home"} className=" px-3 py-2 rounded bg-[#ED1E79] text-white ">Ir al Home</Link>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

const PaymentPath = () => {

    const bancos = ["Banco Itaú", "Banco Nación movil", "Buhobank", "Banco de la provincia Buenos Aires", "Galicia Move", "Santander"];
    const [showBankTransfer, setShowBankTransfer] = useState(false);
    const [showBankModal, setShowBankModal] = useState(false);

    const handleSubmit=()=>{
        setShowBankModal(!showBankModal);
    }

    return (
    <div className='w-full my-5'>
        <div className='grid grid-cols-1 md:block'>
        <span><Link to={"/home"} className='text-black mx-3'>Home</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Donde Viajo</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Opciones</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Viaje Elegido</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Reserva de Viaje</Link></span>
        </div>
        
        <div className='w-full  grid grid-cols-1 md:grid-cols-12 mt-7'>
            <div className='col-span-12 md:col-span-3'>
                <h2 className='font-bold mb-[4rem]'>Medios de Pago</h2>
                <div className='w-full flex flex-column items-center justify-center mb-5 '>
                    <div>
                        <img src={PaypalFrame} alt='paypal-image'/>
                    </div>
                    <div>
                        <img src={mercadoPagoFrame} alt='paypal-image'/>
                    </div>
                    <div>
                        <button onClick={()=>{setShowBankTransfer(!showBankTransfer)}}>
                            <img src={bankTransfer} alt='paypal-image'/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-9 flex items-center justify-center'>
                

                {
                    showBankTransfer===false ? (

                        <div className='border-[#3BED1E] flex flex-rows md:flex-col items-center justify-center p-3' style={{backgroundColor:"#D9D9D9", borderColor:"#3BED1E"}}>
                            <div className='mx-1 my-2'>
                                <img src={warningFrame} alt='warning-frame' />
                            </div>
                            <p className='mx-1'>
                                Recuerda que si cancelas el servicio se te cobrará la reserva. 
                                ¡Tienes hasta 24 horas antes del viaje para cambiar de idea! 
                                La conductora debe saber con anticipación para re-organizar su viaje.
                            </p>
                        </div>
                    ) : (

                        <Formik

                            initialValues={{
                                bankName:"",
                                titular:"",
                                bankAccount:"",
                            }}
                            onSubmit={handleSubmit}
                        >
                            
                            <Form className='md:w-[534px] w-full bg-[#FF4999] p-3'>
                            <div className="mb-6 relative">
                                <Field
                                
                                    type="text"
                                    id="bankName"
                                    name="bankName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del Banco" required
                                />
                                <div className='right-2 top-[30%] absolute'>
                                    <img src={checkBank} alt='check bank' className='' />
                                </div>
                                
                            </div>
                            <div className="mb-6 relative">
                                <Field
                                    type="text"
                                    id="titular"
                                    name="titular"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titular" required
                                />
                                <div className='right-2 top-[30%] absolute'>
                                    <img src={checkBank} alt='check bank' className='' />
                                </div>
                            </div>
                            <div className="mb-6 relative">
                                <Field
                                    type="text"
                                    id="bankAccount"
                                    name="bankAccount"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CBU" required
                                />
                                <div className='right-2 top-[30%] absolute'>
                                    <img src={checkBank} alt='check bank' className='' />
                                </div>
                            </div>
                        
                            
                            <div className='text-end'>
                                <button type="submit" className="bg-[#D9D9D9] px-3 py-2 rounded">Transferir</button>
                            </div>
                            
                            </Form>
                        </Formik>
                        
                    )
                }
            </div>
        </div>
        {
            showBankModal === true && <ModalTransferSuccess/>
        }
    </div>
  )
}

export default PaymentPath