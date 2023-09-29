
import React from 'react';
import { useState } from 'react';
import Details2 from './Details2';
import Details1 from './Details1';

const styles = {
    toggleBarItem: {
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 40px',
        margin: '3px',
        fontSize: '14px',
        fontWeight: '600'
    }
}

const Tab1 = () => {
    const [selectedView, setSelectedView] = useState('title1');

    return (
        <div style={{ background: 'white', paddingTop: '12px' }}>

            <div style={{ display: 'flex', width: '305px', margin: 'auto', border: '1px solid #BDBDBD', borderRadius: '5px', minHeight: '45px' }}>
                <div style={{
                    ...styles.toggleBarItem,
                    border: selectedView === 'title1' ? '1px solid #BDBDBD' : 'none',
                    color: selectedView === 'title1' ? 'white' : '#828282',
                    background: selectedView === 'title1' ? '#0F75BC' : 'white'
                }}
                    onClick={() => setSelectedView('title1')}>Tab Title 1</div>
                <div style={{
                    ...styles.toggleBarItem,
                    border: selectedView === 'title2' ? '1px solid #BDBDBD' : 'none',
                    color: selectedView === 'title2' ? 'white' : '#828282',
                    background: selectedView === 'title2' ? '#0F75BC' : 'white'
                }}
                    onClick={() => setSelectedView('title2')}>Tab Title 2</div>

            </div>

            {selectedView === 'title1' && <Details1 />}
            {selectedView === 'title2' && <Details2 />}
        </div>
    );
};

export default Tab1;

