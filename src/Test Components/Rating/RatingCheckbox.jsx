import React from 'react';
import './RatingRoot.css';

const RatingCheckbox = () => {
    return (
        <div>
            <div className='flex bg-gray-200 justify-between w-1/2'>
                <div>
                    <div>
                        <input type='radio' name='rating' />
                    </div>
                    <div>
                        Never
                    </div>
                </div>
                <div className='border-2'></div>
                <div>
                    <div>
                        <input type='radio' name='rating' />
                    </div>
                    <div>
                        Sometimes
                    </div>
                </div>
                <div>
                    <div>
                        <input type='radio' name='rating' />
                    </div>
                    <div>
                        Always
                    </div>
                </div>
            </div>

            <input type="radio" id="myRadio" name="myRadioGroup" />
            <label for="myRadio">Option 1</label>



        </div>
    );
};

export default RatingCheckbox;