export const ProgressBarCode = `
import React, { useState } from 'react';

const styles = {
    bar: {
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        borderRadius: '3px',
        'WebkitTransition': 'width 10s ease-in-out',
        transition: 'width 10s ease-in-out',
        background: 'white',
        width: '100%',
        background: '#D9D9D9'
    },
    percent: {
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: '3px',
        'WebkitTransition': 'width 10s ease -in -out',
        transition: 'width 10s ease -in -out',
        background: 'rgba(44, 60, 81, 1)',
        width: '1%',
    }
};

const ProgressBar = () => {
    const [progressBarVisible, setProgressBarVisible] = useState(false);

    return (
        <div>
            {progressBarVisible &&
                <div className='h-1 w-full relative'>
                    <div style={{ ...styles.bar, }}></div>
                    <div style={{
                        ...styles.percent, width: '75%', background: 'green' //change width and background as you need
                    }}>
                    </div>
                </div>
            }

            <button className='bg-sky-500 p-3 text-white' onClick={() => setProgressBarVisible(!progressBarVisible)}>Open ProgressBar</button>

        </div>
    );
};

export default ProgressBar;

`;