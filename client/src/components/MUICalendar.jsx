import * as React from "react";
import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useAtom } from "jotai";
import state from "./AtomStates";

export default function MUICalendar({
  isModalCalendar,
  handleCustomDay,
  displayCustomDay,
  setDisplayCustomDay,
}) {
  const [customDay, setCustomDay] = useState(null);
  const [displayCustomDayNotF, setDisplayCustomDayNotF] = useState(null);

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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {isModalCalendar ? (
          <div>
            <DatePicker
              value={customDay}
              onChange={(newValue) => setCustomDay(newValue)}
              open={true}
            />
            <button
              onClick={() => handleCustomDay(customDay)}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              Add Product to this day
            </button>
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
