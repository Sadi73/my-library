import React, { useState } from 'react';

const ShowCodeContainer = ({ codeSnippet }) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <div className='flex justify-center'>
                <button
                    className='mt-4 px-2 py-1 border text-blue-400 rounded hover:border-blue-200 text-sm'
                    onClick={() => setShowCode(!showCode)}
                >
                    {showCode ? 'Hide Code' : 'Show Code'}
                </button>
            </div>
            {showCode &&
                <pre className='p-3  mt-2 rounded max-h-96 overflow-auto bg-[#0B1120] text-white'>
                    <code>{codeSnippet}</code>
                </pre>
            }
        </div>
    );
};

export default ShowCodeContainer;