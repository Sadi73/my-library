import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const ProgressBarRoot = () => {
    const [progressBarVisible, setProgressBarVisible] = useState(false);

    return (
        <div>
            {
                progressBarVisible && 
                <ProgressBar value='75%' backgroundColor='green'/>
            }

            <button className='bg-sky-500 p-3 text-white' onClick={() => setProgressBarVisible(!progressBarVisible)}>Open ProgressBar</button>

        </div>
    );
};

export default ProgressBarRoot;