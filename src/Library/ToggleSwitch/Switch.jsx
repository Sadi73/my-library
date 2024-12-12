import React, { useState } from 'react';
import './Switch.css'

const Switch = () => {

    const [checkboxHandler, setCheckboxHandler] = useState(false)

    return (
        <div className='flex items-center gap-2'>
            <div className="switchContainer">
                <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setCheckboxHandler(!checkboxHandler)} />
                <label className="switch" htmlFor="checkbox">
                    <span className="slider"></span>
                </label>
            </div>
            <h3>Required</h3>
        </div>
    );
};

export default Switch;