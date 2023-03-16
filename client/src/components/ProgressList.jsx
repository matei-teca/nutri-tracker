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

  const [totalNut, SetTotalNut] = useState([]);

  useEffect(() => {
    user.days[today].map((prod) => {
      fetch(`http://localhost:3001/api/products/${prod.code}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          SetTotalNut((prev) => [...prev, data.nutriments]);
        });
    });
  }, [user]);

  // let sum = totalNut.slice(0, totalNut.length / 2).reduce((a, b) => {
  //   return {
  //     kcal: a.kcal + b.kcal,
  //     sugars: a.sugars + b.sugars,
  //     proteins: a.proteins + b.proteins,
  //     fiber: a.fiber + b.fiber,
  //     carbohydrates: a.carbohydrates + b.carbohydrates,
  //     fat: a.fat + b.fat,
  //   };
  // });
  console.log(totalNut.slice(0, totalNut.length / 2));
  let total = {
    kcal: 0,
    carbohydrates: 0,
    fat: 0,
    proteins: 0,
    fiber: 0,
    sugars: 0,
  };
  totalNut.slice(0, totalNut.length / 2).map((el) => {
    Object.keys(el).map((att) => {
      total[att] += el[att];
    });
  });
  console.log(total);
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
            <p>{user.kcal}</p>-<p>{total.kcal}</p>=
            <p>{user.kcal - total.kcal}</p>
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
            <progress
              max="337"
              value={`${Math.floor(total.carbohydrates)}`}
            ></progress>
          </div>
          <Badge bg="primary" pill>
            {`${Math.floor(total.carbohydrates)}/337`}
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
            <progress max="116" value={`${Math.floor(total.fat)}`}></progress>
          </div>
          <Badge bg="primary" pill>
            {`${Math.floor(total.fat)}/116`}
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
            <progress
              max="60"
              value={`${Math.floor(total.proteins)}`}
            ></progress>
          </div>
          <Badge bg="primary" pill>
            {`${Math.floor(total.proteins)}/60`}
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
            <progress max="42" value={`${Math.floor(total.fiber)}`}></progress>
          </div>
          <Badge bg="primary" pill>
            {`${Math.floor(total.fiber)}/42`}
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
            <progress max="35" value={`${Math.floor(total.sugars)}`}></progress>
          </div>
          <Badge bg="primary" pill>
          {`${Math.floor(total.sugars)}/35`}

          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
