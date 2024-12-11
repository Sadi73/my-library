export const Tab_1_Code = `

import React, { useState } from 'react';

const Tab1 = () => {
    const [selectedView, setSelectedView] = useState('title1');

    return (
        <div className='bg-white pt-3'>

            <div className='w-[306px] mx-auto min-h-11 flex border border-[#BDBDBD] rounded-md' >
                <div
                    className={\`flex items-center rounded-md cursor-pointer px-10 m-1 text-sm font-semibold \${selectedView === 'title1'
                        ? 'border-gray-400 text-white bg-[#0F75BC]'
                        : 'border-0 text-gray-500 bg-white'
                        }\`}
                    onClick={() => setSelectedView('title1')}
                >
                    Tab Title 1
                </div>

                <div
                    className={\`flex items-center rounded-md cursor-pointer px-10 m-1 text-sm font-semibold \${selectedView === 'title2'
                        ? 'border-gray-400 text-white bg-[#0F75BC]'
                        : 'border-0 text-gray-500 bg-white'
                        }\`}
                    onClick={() => setSelectedView('title2')}
                >
                    Tab Title 2
                </div>
            </div>

            {selectedView === 'title1' &&
                <div>
                    Details 1 for tab 1
                </div>
            }
            {selectedView === 'title2' &&
                <div>
                    Details 2 for tab 2
                </div>
            }
        </div>
    );
};

export default Tab1;




`;