import React, { useState } from 'react';
import DateField3 from './DateField';
import moment from 'moment';

const DateFieldRoot = () => {

    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
   
    return (
        <div>
            <DateField3 currentDate={selectedDate} setDate={(value) => setSelectedDate(value)} />
            <div>Selected Date: {selectedDate}</div>

        </div>
    );
};

export default DateFieldRoot;