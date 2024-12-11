export const DateFieldCode = `
import React, { useState, useEffect } from 'react';

const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
}

const DateField = ({ startYear = 1900, endYear = 2050 }) => {
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
    const [localCurrentDate, setLocalCurrentDate] = useState({ day: 1, month: 1, year: startYear });

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    useEffect(() => {
        const [year, month, day] = selectedDate.split('-').map(Number);
        setLocalCurrentDate({ day, month, year });
    }, [selectedDate]);

    const handleChange = (e) => {
        const updatedDate = {
            ...localCurrentDate,
            [e.target.name]: parseInt(e.target.value, 10),
        };

        setLocalCurrentDate(updatedDate);
        const formattedDate = \`\${updatedDate.year}-\${String(updatedDate.month).padStart(2, '0')}-\${String(updatedDate.day).padStart(2, '0')}\`;
        setSelectedDate(formattedDate);
    };

    return (
        <div>
            <div className="flex gap-2">
                <select
                    name="day"
                    value={localCurrentDate.day}
                    onChange={handleChange}
                    style={{ border: '1px solid', width: '80px', textAlign: 'center' }}
                >
                    {days.map(day => (
                        <option value={day} key={day}>{day}</option>
                    ))}
                </select>

                <select
                    name="month"
                    value={localCurrentDate.month}
                    onChange={handleChange}
                    style={{ border: '1px solid', width: '80px', textAlign: 'center' }}
                >
                    {months.map((month, index) => (
                        <option value={index + 1} key={month}>{month}</option>
                    ))}
                </select>

                <select
                    name="year"
                    value={localCurrentDate.year}
                    onChange={handleChange}
                    style={{ border: '1px solid', width: '80px', textAlign: 'center' }}
                >
                    {years.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div>Selected Date: {selectedDate}</div>
        </div>
    );
};

export default DateField;

`;