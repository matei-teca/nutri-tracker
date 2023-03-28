import * as React from 'react';
import {useState} from "react";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useAtom } from 'jotai';
import state from './AtomStates';

export default function MUICalendar({isModalCalendar, handleCustomDay}) {
  const [customDay, setCustomDay] = useState(null);
  const [displayCustomDay, setDisplayCustomDay] = useState(null);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        {isModalCalendar ? 
        <div>
        <DatePicker value={customDay} onChange={(newValue) => setCustomDay(newValue)} open={true}/> 
        <button onClick={() => handleCustomDay(customDay)} style = {{position: "absolute", top: 0, left : 0}}>Add Product to this day</button>
        </div>
        : <DatePicker value={displayCustomDay} onChange={(newValue) => setDisplayCustomDay(newValue)}/>
        }
      </DemoContainer>
    </LocalizationProvider>
  );
}