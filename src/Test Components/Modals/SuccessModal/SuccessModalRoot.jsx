import React, { useEffect, useState } from 'react';
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
            <button className='bg-sky-500 p-3 text-white' onClick={() => setSuccessModalVisible(true)}>Open Success Modal</button>

        </div>
    );
};

export default SuccessModalRoot;