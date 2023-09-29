import React, { useState } from 'react';
import { CustomModal, CustomModalBody, CustomModalHeader } from './Modals/CustomModal';

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <CustomModal
                visible={modalVisible}
            >
                <CustomModalHeader
                    onClose={() => setModalVisible(false)}
                >Modal Header</CustomModalHeader>
                <CustomModalBody>Modal Body</CustomModalBody>
            </CustomModal>
            <button onClick={() => setModalVisible(true)}>Open Modal</button>

        </div>
    );
};

export default Modal;