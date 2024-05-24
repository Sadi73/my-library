import React from 'react';

const SideBar = () => {
    return (
        <div className="sideBar h-[300px] w-1/4 border-2 rounded p-5 sticky top-10">
            <h1>Important Links</h1>
            <div className=''>
                <ul className="text-blue-700 list-disc pl-5">
                    <li>
                        <a href="https://github.com/brillout/awesome-react-components" target="_blank">React Awesome Components</a>
                    </li>
                    <li>
                        <a href="https://uiverse.io/all" target="_blank">UniverseIO</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;