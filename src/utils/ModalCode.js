export const ModalCode = `
import React, { useEffect, useState } from 'react';
import './CustomModal.css';
import CloseIcon from '../../../assets/Cross.svg'

const CustomModal = (props) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!props.visible) return;
            const modalContent = document.querySelector('.response-modal-content');
            if (modalContent && !modalContent.contains(event.target) && props?.onClose) {
                props.onClose(); // Call the provided onClose function to close the modal
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [props]);


    if (!props?.visible) {
        return null;
    };

    return (
        <div className="response-modal" style={{ display: "block" }}>
            {/* <!-- Modal content --> */}
            <div className="response-modal-content" style={{ maxWidth: props?.size === "xl" ? '1140px' : props?.size === "lg" ? '800px' : '500px', ...props?.style }}>
                {props?.children}
            </div>
        </div>
    )
};

const CustomModalHeader = (props) => {
    return (
        <div className="response-modal-header"
            style={{
                background: props?.color === "warning" ? '#F9B115' :
                    props?.color === "danger" ? '#E55353' :
                        props?.color === "success" ? 'green' : '',

                color: props?.color ? '#fff' : '',
                width: '100%'
            }}>
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '95%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        {props?.children}
                    </div>
                </div>
                <div style={{ width: '5%', color: props?.color ? props?.color : 'black', display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{ cursor: 'pointer' }} onClick={props?.onClose}>
                        <img src={CloseIcon} width='15' height='15' alt='closeModal' />
                    </span>
                </div>
            </div>
        </div>
    );
};

const CustomModalBody = (props) => {
    return (
        <div className="response-modal-body" style={{ ...props?.style }}>
            {props?.children}
        </div>
    )
};

const ModalRoot = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            {modalVisible &&
                <CustomModal visible={modalVisible}>
                    <CustomModalHeader onClose={() => setModalVisible(false)}>Modal Header</CustomModalHeader>
                    <CustomModalBody>Modal Body (enter your message / body)</CustomModalBody>
                </CustomModal>
            }
            <button className='bg-sky-500 p-3 text-white' onClick={() => setModalVisible(true)}>Open Modal</button>
        </div>
    );
};

export default ModalRoot;
`