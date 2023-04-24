import React, { useState } from "react";

//React bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

//React hot toast
import {toast,Toaster} from "react-hot-toast"

function ModalEditProfilePic(props) {
  const [pic, setPic] = useState(null);

  const fileInputRef = React.useRef(null);

  function handleChange(e) {
    // Get the selected file
    const selectedPhoto = e.target.files[0];
    setPic(selectedPhoto);
  }

  const handleButtonClick = () => {
    // Open the file input dialog
    fileInputRef.current.click();
  };

  function handleSubmit(e) {
    e.preventDefault();

  if(pic===null){

   toast.error('Los campos están vacios!',{
        duration:3500,
         position:'top-center',
        style: {
         borderRadius: '10px',
          background: '#333',
          color: '#fff',
       },
      })

     return;
    }else{
         setTimeout(() => {
               setPic(null);
                props.onHide()
             }, 1);

               toast.success('Los cambios se han guardado!',{
                 duration:4000,
                position:'top-center',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              })

     }
  }

  return (
    <>
     <Toaster />
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cambiar foto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicPic">
              <Form.Control
                type="file"
                onChange={handleChange}
                ref={fileInputRef}
                name="pic"
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#FF3A90", borderRadius: "20px" }}
              className="max-md:ml-40 mt-3 ml-[68%]"
              variant="primary"
              type="submit"
            >
              Guardar Cambios
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEditProfilePic;
