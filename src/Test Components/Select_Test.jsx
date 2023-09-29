import React, { useState } from 'react'
import Select from 'react-select'


const Select_Test = () => {

  const [selectedPlatform, setSelectedPlatform] = useState([]);

  const options = [
    { value: '1', label: 'React' },
    { value: '2', label: 'Angular' },
    { value: '3', label: 'Vue' },
    { value: '4', label: 'TypeScript' },
    { value: '5', label: 'Nuxt' },
  ]

  console.log(selectedPlatform)

  return (
    <div>
      <h1 className='text-center'>Select Advanced</h1>
      <label htmlFor="iceCream">Choose any Platform</label>

      <Select
        id='iceCream'
        isMulti
        onChange={(e) => {
          // console.log(e)
          setSelectedPlatform(e.map(item => item));
        }}
        defaultValue={options[1]}
        options={options} />

    </div>
  )
}

export default Select_Test