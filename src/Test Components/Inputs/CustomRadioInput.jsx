import React from 'react';
import './CustomRadioInput.css'

const CustomRadioInput = () => {
    return (
        <div>

            <div className='container'>
                <label htmlFor="myRadio" className='radio-label'>
                    <input type="radio" id="myRadio" className='radio' />
                    <div className='outerCircle' style={{ width: '20px', height: '20px', padding: '2.5px', border: '2px solid #EC4747', borderRadius: '50%' }}>
                        <div className='innerCircle' style={{ width: '100%', height: '100%', borderRadius: '50%', background: '' }}>
                        </div>
                    </div>
                </label>
            </div>



        </div>
    );
};

export default CustomRadioInput;