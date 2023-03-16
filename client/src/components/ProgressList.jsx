import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { MDBCard, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useAtom } from "jotai";
import state from "./AtomStates";
import { useState, useEffect } from "react";

export default function ProgressList() {
  const [user] = useAtom(state.user);
  const today = new Date().toISOString().substring(0, 10);

  const [totalNut, SetTotalNut] = useAtom(state.totalNut);

  useEffect(() => {
    user.days[today].map((prod) => {
      fetch(`http://localhost:3001/api/products/${prod.code}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          Object.keys(data.nutriments).map((att) => {
            SetTotalNut((prev) => ({
              ...prev,
              [att]: totalNut[att] + data.nutriments[att],
            }));
          });
        });
    });
  }, [user]);

  // useEffect(() => {
  //   let copy = { ...totalNut };
  //   user.days[today].map((prod) => {
  //     fetch(`http://localhost:3001/api/products/${prod.code}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         Object.keys(copy).map((att) => {
  //           copy[att] += data.nutriments[att];
  //         });
  //       });
  //   });
  //   SetTotalNut({...copy});
  // }, [user]);
  console.log(totalNut);
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
            <p>{user.kcal}</p>- <p>{}</p>=<p>{3000}</p>
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
