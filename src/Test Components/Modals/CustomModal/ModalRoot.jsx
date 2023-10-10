import React, { useState } from 'react';
import { CustomModal, CustomModalBody, CustomModalHeader } from './CustomModal';

const ModalRoot = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            {
                modalVisible &&
                <CustomModal visible={modalVisible}>
                    <CustomModalHeader onClose={() => setModalVisible(false)}>Modal Header</CustomModalHeader>
                    <CustomModalBody>Modal Body</CustomModalBody>
                </CustomModal>
            }
            <button className='bg-sky-500 p-3 text-white' onClick={() => setModalVisible(true)}>Open Modal</button>

        </div>
    );
};

export default ModalRoot;