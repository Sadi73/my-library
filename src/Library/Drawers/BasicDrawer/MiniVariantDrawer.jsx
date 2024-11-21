import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { PiFireFill } from 'react-icons/pi';
import { VscThreeBars } from 'react-icons/vsc';

const MiniVariantDrawer = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
                    }`}
            >
                {/* Logo Section */}
                <div className="p-4 flex justify-center items-center">
                    <div className="text-xl">
                        <PiFireFill />
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-4 p-4">
                    <a
                        href="/"
                        className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700`}
                    >
                        <FaHome />
                        {!isCollapsed && <span>Menu 1</span>}
                    </a>
                    <a
                        href="/"
                        className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700`}
                    >
                        <FaHome />
                        {!isCollapsed && <span>Menu 2</span>}
                    </a>
                    <a
                        href="/"
                        className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700`}
                    >
                        <FaHome />
                        {!isCollapsed && <span>Menu 3</span>}
                    </a>
                    <a
                        href="/"
                        className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700`}
                    >
                        <FaHome />
                        {!isCollapsed && <span>Menu 4</span>}
                    </a>

                    <hr className="my-4 border-gray-600" />

                    <a
                        href="/"
                        className="flex items-center gap-4 p-2 rounded hover:bg-gray-700"
                    >
                        <FaHome />
                        {!isCollapsed && <span>Home</span>}
                    </a>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white flex items-center justify-between p-4 shadow">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-xl focus:outline-none flex items-center gap-2"
                    >
                        <VscThreeBars />
                    </button>
                </header>

                {/* Outlet Content */}
                <main className="flex-1 overflow-auto p-4 background-color-dot">
                    {/* <Outlet /> */}
                    Outlet or Content Here
                </main>
            </div>
        </div>
    );
};

export default MiniVariantDrawer;
