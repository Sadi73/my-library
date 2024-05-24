import React, { useEffect } from 'react';
import './SuccessModal.css';
import { CustomModal, CustomModalBody } from '../CustomModal/CustomModal';
import OkIcon from '../../../assets/OkIcon.svg'

const SuccessModal = (props) => {
  // ------ For Auto Close After 2 Second--------
    useEffect(() => {
        setTimeout(() => {
          props.setModalVisible(false);
        }, 2000);
      }, []);
    
    
      return (
        <CustomModal
          visible={props?.modalVisible}
          style={{ marginTop: '20%' }}
        >
          <CustomModalBody>
            <div className="container">
              <div className="row">
                <div className="modalBox success col-sm-12 col-md-12 col-lg-12 center animate" style={{ display: 'block' }}>
                  <div className="icon">
                    <img src={OkIcon} alt='OKIcon' width='50px' />
                  </div>
                  <h1>Success!</h1>
    
                  {/* Message */}
                  <p>{props?.message}</p>
                </div>
    
              </div>
            </div>
          </CustomModalBody>
        </CustomModal>
      )
};

export default SuccessModal;