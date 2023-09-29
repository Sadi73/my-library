import React, { useState } from 'react';
import Loader from './Loader';

const LoaderRoot = () => {

    const [activateLoader, setActivateLoader] = useState(false);
    return (
        <div>
            {activateLoader &&
                <Loader activateLoader={activateLoader} />
            }

            <div onClick={() => setActivateLoader(true)}>Open Loader</div>

        </div>
    );
};

export default LoaderRoot;