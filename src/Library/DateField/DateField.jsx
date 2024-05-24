import React, { useEffect, useState } from 'react'
const date = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let years = [];

for (let i = 0; i < 31; i++) {
    date.push(i + 1)
}

// mandatory props : currentDate , setDate

const DateField3 = ({ currentDate, setDate, experianceIndx, noDay, startYear = 1900, endYear = 2050, columnCustomStyle }) => {

    years = [];

    for (let i = startYear; i <= endYear; i++) {
        years.push(i);
    }

    const [localCurrentDate, setLocalCurrentDate] = useState({});

    useEffect(() => {
        let date = currentDate.split('-');
        setLocalCurrentDate({
            day: parseInt(date[2]),
            month: parseInt(date[1]),
            year: parseInt(date[0])
        })

    }, [currentDate])

    const handleChange = (e) => {
        if (e.target.name === 'day') {
            const date = `${localCurrentDate.year}-${localCurrentDate.month}-${e.target.value}`;
            if (experianceIndx) {
                setDate(date, experianceIndx)
            } else {
                setDate(date)
            }

        } else if (e.target.name === 'month') {
            const date = `${localCurrentDate.year}-${e.target.value}-${localCurrentDate.day}`;
            if (experianceIndx) {
                setDate(date, experianceIndx)
            } else {
                setDate(date)
            }
        } else if (e.target.name === 'year') {
            const date = `${e.target.value}-${localCurrentDate.month}-${localCurrentDate.day}`;
            if (experianceIndx) {
                setDate(date, experianceIndx)
            } else {
                setDate(date)
            }
        }

    }



    return (
        <div className='flex gap-2'>
            {!noDay &&
                <div style={{ marginBottom: '5px', ...columnCustomStyle, }}>
                    <select name="day" id="date" style={{ border: '1px solid', width: '90px' }} value={localCurrentDate.day} onChange={e => handleChange(e)}>
                        {date.map(day => <option value={day} key={"day" + day}>{day}</option>)}
                    </select>
                </div>}

            <div style={{ marginBottom: '5px', ...columnCustomStyle, }}>
                <select name="month" id="month" style={{ border: '1px solid', width: '90px' }} value={localCurrentDate.month} onChange={handleChange}>
                    {months.map((month, index) => <option value={index + 1} key={"month" + month} >{month}</option>)}
                </select>
            </div>
            <div style={{ ...columnCustomStyle, }}>
                <select name="year" id="year" style={{ border: '1px solid', width: '90px' }} value={localCurrentDate.year} onChange={handleChange}>
                    {years.map(year => <option value={year} key={"year" + year}>{year}</option>)}
                </select>
            </div>
        </div>

    )
}

export default DateField3