export const Tab_2_Code = `

import React, { useState } from 'react';

const styles = {
    campaignHistorySwapperTitleActive: {
        display: 'flex',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontSize: '14px',
        padding: '10px 5px',
        cursor: 'pointer',
    },
    campaignHistorySwapperTitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        color: '#828282',
        padding: '10px 5px',
        cursor: 'pointer',
    },
    userHolder: {
        display: 'flex',
        width: '14%',
        justifyContent: 'center',
    },
    userHolderActive: {
        display: 'flex',
        width: '14%',
        justifyContent: 'center',
        borderBottom: '1px solid #000000',
    }
};

const Tab2 = () => {
    const [currentState, SetCurrentState] = useState('title1');

    return (
        <div>
            <div className='flex'>
                <div className='w-full flex border-b border-[#BDBDBD]'>

                    <div style={currentState === 'title1' ? styles.userHolderActive : styles.userHolder}>
                        <div style={currentState === 'title1' ? styles.campaignHistorySwapperTitleActive : styles.campaignHistorySwapperTitle}
                            onClick={() => SetCurrentState('title1')}>
                            Tab Title 1
                        </div>
                    </div>

                    <div style={currentState === 'title2' ? styles.userHolderActive : styles.userHolder}>
                        <div style={currentState === 'title2' ? styles.campaignHistorySwapperTitleActive : styles.campaignHistorySwapperTitle}
                            onClick={() => SetCurrentState('title2')}>
                            Tab Title 2
                        </div>
                    </div>

                </div>
            </div>

            {currentState === 'title1' &&
                <div>
                    Details 1 for tab 1
                </div>
            }
            {currentState === 'title2' &&
                <div>
                    Details 2 for tab 2
                </div>
            }

        </div>
    );
};

export default Tab2;
`;