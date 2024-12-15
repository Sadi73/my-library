import React, { useState } from 'react';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const RecursiveRendering = () => {
    const [divs, setDivs] = useState([
        { id: 1, color: getRandomColor(), children: [], split: null },
    ]);

    const handleSplit = (id, direction) => {
        const splitDiv = (divs) =>
            divs.map((div) => {
                if (div.id === id) {
                    return {
                        ...div,
                        children: [
                            { id: Date.now(), color: div.color, children: [], split: null },
                            { id: Date.now() + 1, color: getRandomColor(), children: [], split: null },
                        ],
                        split: direction,
                    };
                } else {
                    return { ...div, children: splitDiv(div.children) };
                }
            });

        setDivs(splitDiv(divs));
    };

    const handleRemove = (id) => {
        const removeDiv = (divs) =>

            divs
                .filter((div) => div.id !== id) // Remove the block with the matching ID
                .map((div) => ({ ...div, children: removeDiv(div.children) })); // Recursively handle children

        setDivs(removeDiv(divs));
    };

    const renderDivs = (divs, parentSplit) =>
        divs.map((div) => (
            <div
                key={div.id}
                className={`
                    relative m-[1px]
                    ${div.split === 'vertical' || parentSplit === 'vertical' ? 'flex' : 'block'} 
                    ${div.split === 'vertical' ? 'flex-row' : 'flex-col'}
                    ${parentSplit === 'horizontal' ? 'h-1/2' : 'h-full'}
                    ${parentSplit === 'vertical' ? 'w-1/2' : 'w-full'}
                    `}
                style={{ backgroundColor: div.color }}
            >
                {!div.children.length && (
                    <div
                        className='flex justify-center items-center h-full text-white'
                    >
                        <button
                            className='border border-white p-3'
                            onClick={() => handleSplit(div.id, 'vertical')}
                        >
                            V
                        </button>
                        <button
                            className='border border-white p-3'
                            onClick={() => handleSplit(div.id, 'horizontal')}
                        >
                            H
                        </button>
                        <button
                            className='border border-red-500 text-red-500 p-3'
                            onClick={() => handleRemove(div.id)}
                        >
                            Remove
                        </button>
                    </div>
                )}
                {renderDivs(div.children, div.split)}
            </div>
        ));

    return (
        <div className='flex flex-col h-screen'>
            {renderDivs(divs, null)}
        </div>
    );
};

export default RecursiveRendering;
