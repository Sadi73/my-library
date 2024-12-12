import React, { useState } from 'react';

const ShowCssContainer = ({ cssFile }) => {
    const [showCss, setShowCss] = useState(false);

    return (
        <div className='mt-4'>
            <div className='flex items-center justify-center gap-2'>
                <p>This contains external css file.</p>
                <div className='flex justify-center'>
                    <button
                        className='px-2 py-1 border text-blue-400 rounded hover:border-blue-200 text-sm'
                        onClick={() => setShowCss(!showCss)}
                    >
                        {showCss ? 'Hide CSS' : 'Show CSS'}
                    </button>
                </div>
            </div>
            {showCss &&
                <pre className='p-3 mt-2 text-sm rounded max-h-96 overflow-auto bg-[#0B1120] text-white'>
                    <code>{cssFile}</code>
                </pre>
            }
        </div>
    );
};

export default ShowCssContainer;