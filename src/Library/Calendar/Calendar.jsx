import React, { useState } from 'react';
import moment from 'moment';

// Generate months array with labels
const generateMonths = () =>
    Array.from({ length: 12 }, (_, i) => ({
        value: i, // Month index (0-based, January = 0)
        label: moment().month(i).format('MMMM'), // Full month name
    }));

// Calculate calendar data
const getCalendarData = (year, month) => {
    const totalDays = moment({ year, month }).daysInMonth();
    const firstDay = moment({ year, month }).startOf('month').day();
    const lastDayOfMonth = moment({ year, month }).endOf('month').day();
    const prevMonthDays = moment({ year, month }).subtract(1, 'month').daysInMonth();

    // Fill empty spaces at the beginning with days from the previous month
    const prevMonthDates = Array.from({ length: firstDay }, (_, i) => ({
        date: prevMonthDays - firstDay + i + 1,
        isNextPrevMonth: 'prev',
    }));

    // Fill empty spaces at the end with days from the next month
    const nextMonthDays = Array.from({ length: 6 - lastDayOfMonth }, (_, i) => ({
        date: i + 1,
        isNextPrevMonth: 'next',
    }));

    // Calendar days: previous month dates, current month dates, and next month dates
    const calendarDays = [
        ...prevMonthDates,
        ...Array.from({ length: totalDays }, (_, i) => ({
            date: i + 1,
            isNextPrevMonth: 'current',
        })),
        ...nextMonthDays,
    ];

    return calendarDays;
};

const Calendar = () => {
    const [selectedMonth, setSelectedMonth] = useState(moment().month());
    const currentYear = moment().year();

    const calendarDays = getCalendarData(currentYear, selectedMonth);

    const daysOfWeek = moment.weekdays(); // ['Sunday', 'Monday', ...]

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 mb-10">
                {generateMonths().map((month) => (
                    <button
                        key={month.value}
                        className={`border ${month.value === selectedMonth ? 'bg-blue-300' : ''}`}
                        onClick={() => setSelectedMonth(month.value)}
                    >
                        {month.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="border py-3 flex justify-center">
                        <p>{day}</p>
                    </div>
                ))}
            </div>


            <div className="grid grid-cols-7">
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`
                            border 
                            py-3 
                            flex 
                            justify-center 
                            ${(day.isNextPrevMonth === 'prev' || day.isNextPrevMonth === 'next') ? ' text-gray-300' : 'text-black'}
                            ${(index % 7 === 5 || index % 7 === 6) ? 'text-red-500' : ''}
                            `}
                    >
                        <p>{day.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
