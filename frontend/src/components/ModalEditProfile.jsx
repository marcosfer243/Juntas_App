import React from "react";

//React bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

//React hot toast
import { toast, Toaster } from "react-hot-toast";

function ModalEditProfile(props) {
  const [newData, setnewData] = React.useState({
    tel: "",
    facebook: "",
    instagram: "",
  });

  function handleChange(e) {
    setnewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      newData.tel === "" &&
      newData.facebook === "" &&
      newData.instagram === ""
    ) {
      toast.error("Los campos están vacios!", {
        duration: 4000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setTimeout(() => {
        setnewData({ tel: "", facebook: "", instagram: "" });
        props.onHide();
      }, 1);

      toast.success("Los cambios se han guardado!", {
        duration: 3500,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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
            Editar perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className=" items-center mb-2"
              controlId="formBasicTeléfono"
            >
              <Form.Label className="mt-2 mr-4">Teléfono</Form.Label>
              <Form.Control
                type="text"
                style={{ backgroundColor: "#d9d9d9" }}
                value={newData.tel}
                name="tel"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className=" items-center mb-2"
              controlId="formBasicFacebook"
            >
              <Form.Label className="mt-2 mr-3">Facebook</Form.Label>
              <Form.Control
                style={{ backgroundColor: "#d9d9d9" }}
                type="text"
                value={newData.facebook}
                name="facebook"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicInstagram">
              <Form.Label>Instagram:</Form.Label>
              <Form.Control
                style={{ backgroundColor: "#d9d9d9" }}
                type="text"
                value={newData.instagram}
                name="instagram"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#FF3A90", borderRadius: "20px" }}
              className="max-md:ml-40 mt-4 ml-[68%]"
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

export default ModalEditProfile;
