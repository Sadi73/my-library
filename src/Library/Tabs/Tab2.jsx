
import React from 'react';
import { useState } from 'react';
import Details1 from './Details1';
import Details2 from './Details2';

const styles = {
    
    contentHolder: {
        display: 'flex',
        // width: '95%',
        margin: 'auto',
        alignItems: 'center',
    },
    campaignHistorySwapperHead: {
        display: 'flex',
        width: '100%',
        borderBottom: '1px solid #BDBDBD',
        flexWrap: 'wrap'
    },
    campaignHistorySwapperTitleActive: {
        display: 'flex',
        // width: '8%',
        justifyContent: 'left',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#000000',
        padding: '10px 5px',
        cursor: 'pointer',
    },
    campaignHistorySwapperTitle: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#828282',
        padding: '10px 5px',
        cursor: 'pointer',
    },
    userHolder: {
        display: 'flex',
        width: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 'fit-content',
        whiteSpace: 'pre'
    },
    userHolderActive: {
        display: 'flex',
        width: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #000000',
        minWidth: 'fit-content',
        whiteSpace: 'pre'
    }
};

const Tab2 = () => {
    const [currentState, SetCurrentState] = useState('title1')   //title2

    return (
        <div>
            <div style={styles.contentHolder}>
                <div style={styles.campaignHistorySwapperHead}>

                    {/* Route */}
                    <div style={currentState === 'title1' ? styles.userHolderActive : styles.userHolder}>
                        <div style={currentState === 'title1' ? styles.campaignHistorySwapperTitleActive : styles.campaignHistorySwapperTitle}
                            onClick={() => SetCurrentState('title1')}>
                            Tab Title 1
                        </div>
                    </div>

                    {/*  Transport User */}
                    <div style={currentState === 'title2' ? styles.userHolderActive : styles.userHolder}>
                        <div style={currentState === 'title2' ? styles.campaignHistorySwapperTitleActive : styles.campaignHistorySwapperTitle}
                            onClick={() => SetCurrentState('title2')}>
                            Tab Title 2
                        </div>
                    </div>

                </div>
            </div>

            {currentState === 'title1' && <Details1/>}
            {currentState === 'title2' && <Details2/>}

        </div>
    );
};

export default Tab2;