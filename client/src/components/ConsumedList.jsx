import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MUICalendar from "./MUICalendar";
import { useAtom } from "jotai";
import state from "./AtomStates";

export default function ConsumedList() {
  const [user] = useAtom(state.user);

  const today = new Date().toISOString().substring(0, 10);

  return (
    <div className="consumed-container">
      <MDBCard className="prod-container" alignment="center">
        <MDBCardHeader>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MUICalendar isModalCalendar={false}/>
          </LocalizationProvider>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCard>
            <MDBListGroup flush>
              <MDBListGroupItem
                className="prod-list"
                style={{
                  display: "inline-block",
                  justifyContent: "space-around",
                }}
              >
                {user.days[today].map((el) => (
                  <div style={{ display: "flex" }}>
                    <p
                      style={{ gap: "10px" }}
                      className="consumed-list--el-name"
                    >
                      {el.name}
                    </p>
                    <p>{el.grams}g</p>
                  </div>
                ))}
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCard>
        </MDBCardBody>
        {/* <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
