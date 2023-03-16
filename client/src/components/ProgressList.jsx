import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { MDBCard, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

export default function ProgressList() {
  return (
    <div className="progress-list--container">
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>Goal</p>
            <p>Food</p>
            <p>Remaining</p>
          </MDBListGroupItem>
          <MDBListGroupItem
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingInline: "8%",
            }}
          >
            <p>3000</p>- <p>{}</p>=<p>{3000}</p>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>
      <ListGroup style={{ width: "100%" }} as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div
            style={{ displa: "flex", flexDirection: "column", width: "90%" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Carbohydrates</div>
            </div>
            <progress></progress>
          </div>
          <Badge bg="primary" pill>
            17/337
          </Badge>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div
            style={{ displa: "flex", flexDirection: "column", width: "90%" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Fat</div>
            </div>
            <progress></progress>
          </div>
          <Badge bg="primary" pill>
            17/116
          </Badge>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div
            style={{ displa: "flex", flexDirection: "column", width: "90%" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Proteins</div>
            </div>
            <progress></progress>
          </div>
          <Badge bg="primary" pill>
            17/58
          </Badge>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div
            style={{ displa: "flex", flexDirection: "column", width: "90%" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Fiber</div>
            </div>
            <progress></progress>
          </div>
          <Badge bg="primary" pill>
            17/42
          </Badge>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div
            style={{ displa: "flex", flexDirection: "column", width: "90%" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Sugars</div>
            </div>
            <progress></progress>
          </div>
          <Badge bg="primary" pill>
            17/35
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
