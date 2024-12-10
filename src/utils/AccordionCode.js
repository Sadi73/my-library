export const AccordionCodeSnippet = `
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const allData = [
    { 
        id: 1, 
        title: 'This is title 1', 
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' 
    },
    { 
        id: 2, 
        title: 'This is title 2', 
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' 
    },
    { 
        id: 3, 
        title: 'This is title 4', 
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' 
    }
];

const Accordion = () => {
    const [itemIdsToShow, setItemIdsToShow] = useState([]);

    const toggleDetails = (itemId) => {
        if (itemIdsToShow.includes(itemId)) {
            setItemIdsToShow(itemIdsToShow.filter((id) => id !== itemId));
        } else {
            setItemIdsToShow([...itemIdsToShow, itemId]);
        }
    };

    return (
        <div className='border rounded-md'>
            {allData.map((eachData) => (
                <div key={eachData.id}>
                    <div
                        className='flex items-center gap-2 p-2 cursor-pointer border-b bg-gray-100'
                        onClick={() => toggleDetails(eachData.id)}
                    >
                        {itemIdsToShow.includes(eachData.id) ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        <h3>{eachData.title}</h3>
                    </div>
                    {itemIdsToShow.includes(eachData.id) && (
                        <div className='p-3'>
                            <p>{eachData.message}</p>
                        </div>
                    )}
                </div>
            ))}
                
        </div>
    );
};

export default Accordion;
`;