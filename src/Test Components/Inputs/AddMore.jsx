import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import CrossIcon from '../../assets/Cross.svg'

const AddMore = () => {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur, setValues } = useFormik({
        initialValues: {
            choiceList: ['']
        }

    })

    console.log(values)

    return (
        <div>
            {values.choiceList.map((choice, index) =>
                <div key={index} className='flex items-center gap-3 mb-2'>
                    <div>{index + 1}</div>
                    <div>
                        <input
                            className='border-2 p-1 w-96'
                            name={`choiceList[${index}]`}
                            placeholder='Enter A Text'
                            value={values.choiceList[index]}
                            onChange={handleChange} />
                    </div>
                    {values.choiceList.length > 1 && <div onClick={() => {
                        let dummyArray = [...values.choiceList];
                        dummyArray.splice(index, 1);
                        setValues({ ...values, choiceList: dummyArray })
                    }}>
                        <img src={CrossIcon} />
                    </div>}
                </div>
            )}

            <div className='bg-sky-500  text-white mt-3 p-2 inline-block cursor-pointer' onClick={() => {
                const newChoiceList = [...values.choiceList, ''];
                setValues({ ...values, choiceList: newChoiceList })
            }}>Add More</div>
        </div>
    );
};

export default AddMore;