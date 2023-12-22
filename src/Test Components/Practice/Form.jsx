import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";

const Form = () => {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur, setValues, resetForm, } = useFormik({
        initialValues: {
            // firstName: '',
            lastName: '',
            email: '',
            abir: [
                {
                    gender: ""
                },
                {
                    gender: ""
                },
            ]
        },
        validationSchema: Yup.object({
            // lastName: Yup.string().required('Please Enter Last Name'),
            // firstName: Yup.string().required('Please Enter First Name')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <div className='w-96 '>
            <form onSubmit={handleSubmit}>
                <div className=' flex justify-between mb-2'>
                    <label>Enter First name:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='firstName' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className=' flex justify-between mb-2'>
                    <label>Enter Last name:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='lastName' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className=' flex justify-between mb-2'>
                    <label>Enter Email:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='email' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className=' flex justify-between mb-2'>
                    <label>Enter Gender:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='abir[0].gender' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className=' flex justify-between mb-2'>
                    <label>Enter varsity:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='abir[0].varsity' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className=' flex justify-between mb-2'>
                    <label>Enter varsity 1:</label>
                    <input style={{ border: '1px solid' }} type='text' id='' name='abir[1].varsity' onChange={handleChange} onBlur={handleBlur} />
                </div>

                <div className=' flex justify-between mb-2'>
                    <div></div>
                    <button type='submit' className='bg-blue-500 text-white px-16 py-2'>Submit</button>
                </div>
            </form>

            <div>
                Name: {values?.firstName ? values?.firstName : ''} {values?.lastName}
            </div>


        </div>
    );
};

export default Form;