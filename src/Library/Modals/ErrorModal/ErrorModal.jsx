import React, { useEffect } from 'react'
import successIcon from '../../../assets/FailIcon.svg';
import { CustomModal, CustomModalBody, CustomModalHeader } from '../CustomModal/CustomModal';



const ErrorModal = (props) => {


    // --------------  For Auto Close   -----------------

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.setVisible(false);
    //     }, 2000);
    // }, [])

    return (
        <>
            <CustomModal
                visible={props?.visible}
            >

                <CustomModalHeader
                    className="title" style={{ marginLeft: "46%" }}
                    onClose={() => props.setVisible(false)}>Error</CustomModalHeader>

                <CustomModalBody>

                    <div style={{ margin: '5%', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={successIcon}
                                style={{ width: '50px', cursor: 'pointer', margin: 'auto' }}
                            />
                            <br />

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            {props?.message}
                        </div>

                    </div>

                </CustomModalBody>
            </CustomModal>
        </>

    )
}

export default ErrorModal