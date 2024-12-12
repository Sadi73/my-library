export const RadioInputCode = `
import React from 'react';
import './CustomRadioInput.css'

const CustomRadioInput = () => {
    return (
        <div className='relative'>
            <label htmlFor="myRadio" className='radio-label'>
                <input type="radio" id="myRadio" className='radio' />
                <div className='outerCircle w-5 h-5 p-[2.5px] border-2 border-[#EC4747] rounded-full'>
                    <div className='innerCircle' style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default CustomRadioInput;
`