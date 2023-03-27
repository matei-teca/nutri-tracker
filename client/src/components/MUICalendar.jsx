import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MUICalendar({isModalCalendar}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        {isModalCalendar ? <DatePicker value={value} onChange={(newValue) => setValue(newValue)} open={true}/> 
        : <DatePicker value={value} onChange={(newValue) => setValue(newValue)}/>
        }
      </DemoContainer>
    </LocalizationProvider>
  );
}