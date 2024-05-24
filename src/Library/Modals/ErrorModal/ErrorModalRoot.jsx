
import React, { useState } from 'react';
import ErrorModal from './ErrorModal';

const ErrorModalRoot = () => {
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    return (
        <div>
            {
                errorModalVisible &&
                <ErrorModal
                    visible={errorModalVisible}
                    setVisible={setErrorModalVisible}
                    message={'error message'}
                />
            }
            <button onClick={() => setErrorModalVisible(true)}>Open Modal</button>

        </div>
    );
};

export default ErrorModalRoot;