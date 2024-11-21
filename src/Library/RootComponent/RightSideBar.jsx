import React from 'react';

const RightSideBar = () => {
    return (
        <div className="sideBar h-[90vh] border-l-2 rounded p-5 sticky top-10 space-y-10">
            <div>
                <h1 className='text-xl font-bold text-center'>Important Links</h1>
                <ul className="text-blue-700 list-disc pl-5 font-light space-y-1">
                    <li>
                        <a href="https://github.com/brillout/awesome-react-components" target="_blank">React Awesome Components</a>
                    </li>
                    <li>
                        <a href="https://uiverse.io/all" target="_blank">UniverseIO</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/playlist?list=PLwJhhWUZudKp7QPVALB_kXUyzj8cBB__L" target="_blank">Background Tutorials</a>
                    </li>
                    <li>
                        <a href="https://www.transparenttextures.com/" target="_blank">Background Texture</a>
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='text-xl font-bold text-center'>Component Libraries</h1>
                <ul className="text-blue-700 list-disc pl-5 font-light space-y-1">
                    <li>
                        <a href="https://ant.design/components/overview/" target="_blank">Ant Design</a>
                    </li>
                    <li>
                        <a href="https://mui.com/material-ui/getting-started/" target="_blank">Material UI</a>
                    </li>
                    <li>
                        <a href="https://daisyui.com/components/" target="_blank">Daisy UI</a>
                    </li>
                    <li>
                        <a href="https://ui.shadcn.com/" target="_blank">Shadcn UI</a>
                    </li>
                    <li>
                        <a href="https://coreui.io/react/docs/getting-started/introduction/" target="_blank">Core UI</a>
                    </li>
                    <li>
                        <a href="https://v2.chakra-ui.com/" target="_blank">Chakra UI</a>
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='text-xl font-bold text-center'>Animation Packages</h1>
                <ul className="text-blue-700 list-disc pl-5 font-light space-y-1">
                    <li>
                        <a href="https://animate.style/" target="_blank">Text Animation (animate.css)</a>
                    </li>
                    <li>
                        <a href="https://michalsnik.github.io/aos/" target="_blank">Animation on Scroll (AOS)</a>
                    </li>
                    <li>
                        <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a>
                    </li>
                    <li>
                        <a href="https://react-spring.dev/" target="_blank">React Spring</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RightSideBar;