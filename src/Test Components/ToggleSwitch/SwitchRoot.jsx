import React, { useState } from 'react';
import './Switch.css'

const SwitchRoot = () => {

    const [checkboxHandler, setCheckboxHandler] = useState(false)

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <div className="switchContainer">
                <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setCheckboxHandler(!checkboxHandler)} />
                <label className="switch" htmlFor="checkbox">
                    <span className="slider"></span>
                </label>
            </div>
            <div>Required</div>
            <div>
                <a href='https://uiverse.io/switches' target='_blank' className='text-blue-700'>For more switch...</a>
            </div>
        </div>
    );
};

export default SwitchRoot;