import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar2(props) {
    

    const [value, onChange] = useState(new Date());

    const handleOnChange = (date) => {      
        onChange(date);
        props.callbackDate(date);
    };

    return (
        <div>			
            <Calendar
                onChange={handleOnChange}
                value={value}
                showNeighboringMonth={false}

            />
        </div>
    );
}
