import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const ProgressBarRoot = () => {
    const [progressBarVisible, setProgressBarVisible] = useState(false);

    return (
        <div>
            {
                progressBarVisible && 
                <ProgressBar value='20%' backgroundColor='red'/>
            }

            <button onClick={() => setProgressBarVisible(true)}>Open ProgressBar</button>

        </div>
    );
};

export default ProgressBarRoot;