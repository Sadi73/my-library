import React, { useState } from 'react';
import Loader from './Loader';

const LoaderRoot = () => {

    const [activateLoader, setActivateLoader] = useState(false);
    return (
        <div>
            {activateLoader &&
                <Loader activateLoader={activateLoader} />
            }

            <button className='bg-sky-500 p-3 text-white' onClick={() => setActivateLoader(true)}>Open Loader</button>

        </div>
    );
};

export default LoaderRoot;