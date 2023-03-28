import * as React from "react";
import { useState, useEffect } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { useAtom } from "jotai";
import state from "./AtomStates";

export default function MUICalendar({
  isModalCalendar,
  handleCustomDay,
  displayCustomDay,
  setDisplayCustomDay,
  setModalShow
}) {
  const [customDay, setCustomDay] = useState(null);
  const [displayCustomDayNotF, setDisplayCustomDayNotF] = useState(null);

  const getCalendarPopup = () => {
    const collection = document.getElementsByClassName('MuiPickersPopper-root');
    // turn the collection into an array
    const myElements = Array.from(collection);
    console.log(myElements);
  }

  // useEffect(() => {
  //   getCalendarPopup();
  // }, [])

  const handleDisplayChange = (newValue) => {
    setDisplayCustomDayNotF(newValue);

    let forOneDigit = [`0${newValue.$M + 1}`, `0${newValue.$D}`];
    let forMultipleDigit = [`${newValue.$M + 1}`, `${newValue.$D}`];

    let formatValue = `${newValue.$y}-${
      newValue.$M.toString().split("").length > 1
        ? forMultipleDigit[0]
        : forOneDigit[0]
    }-${
      newValue.$D.toString().split("").length > 1
        ? forMultipleDigit[1]
        : forOneDigit[1]
    }`;

    setDisplayCustomDay(formatValue);
  };
  
  const handleOnAccept = () => {
    handleCustomDay(customDay); 
    alert(`The product was succesfully added to ${customDay}`); 
    setModalShow(false)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={[ isModalCalendar ? 'StaticDatePicker' : "DatePicker" ,]}>
        {isModalCalendar ? (
          <div style = {{marginTop: "0%"}}>
            <StaticDatePicker
              value={customDay}
              onChange={(newValue) => setCustomDay(newValue)}
              onAccept = {handleOnAccept}
              onClose = {() => setModalShow(false)}

            />
          </div>
        ) : (
          <DatePicker
            value={displayCustomDayNotF}
            onChange={(newValue) => handleDisplayChange(newValue)}
          />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
}
