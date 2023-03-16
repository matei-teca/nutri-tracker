import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem
} from "mdb-react-ui-kit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MUICalendar from "./MUICalendar";

export default function ConsumedList() {
  return (
    <div className="consumed-container">
      <MDBCard alignment="center">
        <MDBCardHeader>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MUICalendar />
          </LocalizationProvider>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCard>
            <MDBListGroup flush>
              <MDBListGroupItem
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <p>Product Name</p>
                <p>Quantity</p>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCard>
        </MDBCardBody>
        <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
      </MDBCard>
    </div>
  );
}
