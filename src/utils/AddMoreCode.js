export const AddMoreCode = `
import React, { useState } from 'react';
import { MdRemoveCircle } from 'react-icons/md';

const AddMore = () => {

    const [choiceList, setChoiceList] = useState([''])

    return (
        <div>
            {choiceList.map((choice, index) =>
                <div key={index} className='flex items-center gap-3 mb-2'>
                    <p>{index + 1}</p>
                    <input
                        className='border-2 p-1 w-96'
                        name={\`choiceList[\${index}]\`}
                        placeholder='Enter A Text'
                        value={choiceList[index]}
                        onChange={(e) => {
                            const dummyChoiceList = [...choiceList];
                            dummyChoiceList[index] = e.target.value;
                            setChoiceList(dummyChoiceList)
                        }}
                    />

                    {choiceList.length > 1 &&
                        <button
                            onClick={() => {
                                let dummyArray = [...choiceList];
                                dummyArray.splice(index, 1);
                                setChoiceList(dummyArray)
                            }}>
                            <MdRemoveCircle />
                        </button>}
                </div>
            )}

            <button
                className='bg-sky-500  text-white mt-3 p-2'
                onClick={() => {
                    setChoiceList([...choiceList, ''])
                }}
            >Add More
            </button>
        </div>
    );
};

export default AddMore;
`;