
import React from 'react';
import './Loader.css';
import { CustomModal, CustomModalBody } from '../Modals/CustomModal/CustomModal';

const Loader = (props) => {
    return (
        <div id="loaderModal">
            <CustomModal
                visible={props?.activateLoader}
            >
                <CustomModalBody>
                    <div >
                        <div className='loaderHolder'>
                            <div id="loaderMother">
                                <div className='loaderText'>
                                    {props?.loaderMessage ? props?.loaderMessage : 'Collecting Necessary Data for Organization'}
                                </div>
                                <div className="loader">
                                    <div className="loader1"></div>&nbsp;&nbsp;
                                    <div className="loader2"></div>&nbsp;&nbsp;
                                    <div className="loader3"></div>&nbsp;&nbsp;
                                    <div className="loader4"></div>&nbsp;&nbsp;
                                    <div className="loader5"></div>&nbsp;&nbsp;
                                    <div className="loader6"></div>&nbsp;&nbsp;
                                    <div className="loader7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomModalBody>
            </CustomModal>
        </div>
    )

}
export default Loader