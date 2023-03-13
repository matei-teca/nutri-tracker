import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../App.css";

// import { useAtom } from "jotai";
// import state from "./test";

export default function MyVerticallyCenteredModal({show, onHide, handleModalClick, name, potionsShow}) {

  return (
    <>
   <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
    >
        <Modal.Body style={{ backgroundColor: "black" }}>
          <div
            style={{
              width: "80%",
              height: "700px",
              marginLeft: "10%",
              paddingTop: "5%",
            }}
          >
          </div>

          <div style={{ width: "20%", marginLeft: "45%", marginTop: "-85%" }}>
            <Button variant="outline-success" onClick={handleModalClick}>
              {Object.keys(userPokemons).includes(name)
                ? "Remove"
                : "Add"}
            </Button>
          </div>
        </Modal.Body>
    </Modal>
    </>
  )
}
