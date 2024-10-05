import React from 'react';

const LeftSideBar = () => {
    return (
        <div className="sideBar h-[90vh] border-r-2 rounded p-5 sticky top-10 space-y-3">
            <h1 className='text-xl font-bold text-center'>Component List</h1>
            <p className='font-light'>Accordion</p>
            <p className='font-light'>Modal</p>
            <p className='font-light'>Success Modal</p>
            <p className='font-light'>Tab</p>
            <p className='font-light'>Loader</p>
            <p className='font-light'>Progress Bar</p>
            <p className='font-light'>Number Rating</p>
            <p className='font-light'>Date Field</p>
            <p className='font-light'>Toogle Switch</p>
            <p className='font-light'>Image Input</p>
            <p className='font-light'>Custom Radio Input</p>
            <p className='font-light'>Add More Input</p>
            <p className='font-light'>Tree Structure</p>
        </div>
    );
};

export default LeftSideBar;