import React from 'react'

const Radio = () => {
  return (
    <div className='bg-gray-100 flex justify-center'>
      <div>
        <h1 className='text-center'>Radio Button</h1>
        <div className='flex'>
          <label htmlFor="" className='w-32'>Language : </label>
          <input type="radio" name="" value='value html' id="html" /> <label htmlFor='html'>HTML</label>
          <input type="radio" name="" value='value JS' id="js" /><label htmlFor='js'>JavaScript</label>
          <input type="radio" name="" value='value Python' id="python" /><label htmlFor='python'>Python</label>
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

export default Radio