import { ErrorMessage, Field, Form, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Form_practice = () => {

    const [jobType, setJobType] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        university: '',
        efficiency: ['', '', '', ''],
        typeOfJob: jobType,
        fileInput: selectedFile,
        photo: selectedPhoto
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required').email('invalid'),
        university: Yup.string().required('Choose any university')
    });

    const onSubmit = values => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0].name);
        formik.setValues({ ...formik.values, fileInput: e.target.files[0].name })
    }

    const handlePhoto = e => {
        const imageFile = e.target.files[0];
        setSelectedPhoto(imageFile);
        const reader = new FileReader();

        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.onerror = () => {
        };
        reader.readAsDataURL(imageFile);
        formik.setValues({ ...formik.values, photo: e.target.files[0] })
    }

    // console.log(formik.values);
    // console.log('file:', previewImage)


    return (

        <div className=' flex justify-center'>
            <div>
                <h1 className='text-center'>Form</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>First Name:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="firstName" id="" className='border'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                    </div>

                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Last Name:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName" id="" className='border'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                        </div>
                        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </div>

                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Email:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="email" id="" className='border'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>

                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    </div>

                    {/* ----------------------------Simple Select------------------------------------- */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>University:</label>
                        </div>
                        <div>
                            <select className='border' name='university' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.university}>
                                <option value="">Choose Your University</option>
                                <option value="buet">BUET</option>
                                <option value="ruet">RUET</option>
                                <option value="kuet">KUET</option>
                                <option value="cuet">CUET</option>
                            </select>
                        </div>
                        {formik.touched.university && formik.errors.university ? <div>{formik.errors.university}</div> : null}
                    </div>

                    {/* ------------------------------------Checkbox---------------------------------- */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Efficient In:</label>
                        </div>
                        <div>
                            <input type="checkbox" name="efficiency[0]" id="react" value={formik.values.efficiency[0]} onChange={formik.handleChange} /> <label htmlFor="react" className=''>React</label>
                            <input type="checkbox" name="efficiency[1]" id="angular" value={formik.values.efficiency[1]} onChange={formik.handleChange} className='ml-3' /> <label htmlFor="angular">Angular</label>
                            <input type="checkbox" name="efficiency[2]" id="vue" value={formik.values.efficiency[2]} onChange={formik.handleChange} className='ml-3' /> <label htmlFor="vue">Vue</label>
                            <input type="checkbox" name="efficiency[3]" id="typeScript" value={formik.values.efficiency[3]} onChange={formik.handleChange} className='ml-3' /> <label htmlFor="typeScript">TypeScript</label>
                        </div>
                    </div>

                    {/* ----------------------------------Radio----------------------------------------- */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Job Type:</label>
                        </div>
                        <div>
                            <input type="radio" name="" id="fullTime"
                                // onClick={() => setJobType('fulltime')} 
                                onChange={() => {
                                    setJobType('fulltime');
                                    formik.setValues({ ...formik.values, typeOfJob: 'fulltime' })
                                }}
                                checked={jobType === 'fulltime'} /> <label htmlFor="fullTime">Full Time</label>

                            <input type="radio" name="" id="partTime" className='ml-3'
                                // onClick={() => setJobType('parttime')}
                                onChange={() => {
                                    setJobType('parttime');
                                    formik.setValues({ ...formik.values, typeOfJob: 'parttime' })
                                }}
                                checked={jobType === 'parttime'} /> <label htmlFor="partTime">Part Time</label>

                            <input type="radio" name="" id="remote" className='ml-3'
                                // onClick={() => setJobType('remote')}
                                onChange={() => {
                                    setJobType('remote');
                                    formik.setValues({ ...formik.values, typeOfJob: 'remote' })
                                }} checked={jobType === 'remote'} /> <label htmlFor="remote">Remote</label>
                        </div>
                    </div>

                    {/* ------------------------------File Input------------------------------------ */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Upload Resume:</label>
                        </div>
                        <div className='border w-[250px] pl-3 pt-1'>
                            <input type="file" name="fileInput" id="fileInput" onChange={(e) => handleFileChange(e)} className='hidden' />
                            <div className='text-sky-700 font-semibold'>{selectedFile ? selectedFile : ''}</div>
                        </div>
                        <label htmlFor='fileInput' className='bg-gray-100 px-3 py-1'>Browse</label>
                    </div>

                    {/* ------------------------------Photo Input ------------------------------------ */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                            <label>Upload Photo:</label>
                        </div>
                        <div className='border w-[250px]'>
                            <input type="file" name="photoInput" id="photoInput" onChange={(e) => handlePhoto(e)} className='hidden' />
                            {/* <div>{selectedFile ? selectedFile : ''}</div> */}
                        </div>
                        <label htmlFor='photoInput' className='bg-gray-100 px-3 py-1'>Add Photo</label>
                    </div>
                    <div className='flex justify-end'>{selectedPhoto ? <img src={previewImage} alt='not found' className='w-[300px]' /> : ''}</div>

                    {/* ------------------------------Submit Button------------------------------ */}
                    <div className='flex mt-2'>
                        <div className='w-[200px]'>
                        </div>
                        <div>
                            <input type="submit" name="" id="" className='bg-sky-500 p-2 text-white' />
                        </div>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default Form_practice