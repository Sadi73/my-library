
import React, { useEffect, useRef, useState } from 'react';

const ResponsiveMenu = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const drawerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside the drawer
        document.addEventListener('mousedown', handleClickOutside);

        // Toggle body scroll when the drawer is open
        if (isDrawerVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up event listener and body overflow style on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isDrawerVisible]); // Include isDrawerVisible in the dependency array

    return (
        <div className=' flex items-center justify-between px-5 md:px-10 mt-5 pb-8 border-b relative '>

            {/* Menu Icon */}
            <div
                className='lg:hidden'
                onClick={() => setIsDrawerVisible(!isDrawerVisible)}
            >
                <button>Open Drawer</button>
            </div>

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isDrawerVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 p-5 flex flex-col justify-between`}
            >
                <ul className='space-y-4 font-mono'>
                    <li>Home</li>
                    <li>Stay</li>
                    <li>Rooms</li>
                    <li>Gallery</li>
                </ul>

                {/* Close Button at Bottom */}
                <button
                    onClick={() => setIsDrawerVisible(false)}
                    className="text-lg font-bold mb-5"
                >
                    Close
                </button>
            </div>

            {/* Menu items for larger screens */}
            <ul className='hidden lg:flex items-center text-md lg:text-lg font-mono gap-8'>
                <li className='hover:border-b'>Home</li>
                <li className='hover:border-b'>Stay</li>
                <li className='hover:border-b'>Rooms</li>
                <li className='hover:border-b'>Gallery</li>
            </ul>

            {/* Logo and Login button */}
            <h1 className='uppercase text-xl font-mono font-bold'>Cosystay</h1>

            <button className='relative border px-5 py-2 font-mono hover:text-black overflow-hidden group'>
                <span className='relative z-10'>Login</span>
                <span className='absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
            </button>

        </div>
    );
};

export default ResponsiveMenu;
