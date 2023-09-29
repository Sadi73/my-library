import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

const SuccessModalRoot = () => {
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    return (
        <div>
            {
                successModalVisible &&
                <SuccessModal
                    modalVisible={successModalVisible}
                    setModalVisible={setSuccessModalVisible}
                    message={'Successful'}
                />
            }
            <button onClick={() => setSuccessModalVisible(true)}>Open Modal</button>

        </div>
    );
};

export default SuccessModalRoot;