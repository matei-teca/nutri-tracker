import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../App.css";

// import { useAtom } from "jotai";
// import state from "./test";

export default function MyVerticallyCenteredModal({show, onHide, handleModalButton}) {

  return (
    <>
   <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="m"
    >
        <Modal.Header closeButton style={{ backgroundColor: "white", color: "black" }}>
          <Modal.Title >Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "400px",
            }}
          >
          </div>


        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "white" }}>
      
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Button variant="outline-primary">Save changes</Button>
            </div>
            {/* <Button variant="outline-danger" onClick={handleModalButton}>
                    Close
            </Button> */}
          </div>
        </Modal.Footer>
    </Modal>
    </>
  )
}
