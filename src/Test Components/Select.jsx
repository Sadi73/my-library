import React, { useState } from 'react'

const Select = () => {

    const [name, setName] = useState('html');

    const options = [{ value: 'html', label: 'HTML' }, { value: 'css', label: 'CSS' }, { value: 'js', label: 'JS' }];

    return (
        <div className='bg-gray-100 flex justify-center'>
            <div>
                <h1 className='text-center'>Normal Select</h1>
                <div className='flex'>
                    <label htmlFor="" className='w-32'>Name</label>
                    <select name="" id="" className='border p-3' onChange={(e) => setName(e.target.value)}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JavaScript</option>
                    </select>
                </div>
                <div className='flex'>
                    <div className='w-32'></div>
                    <div>
                        <button className='bg-sky-500 p-2 text-white' onClick={() => console.log(name)}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select