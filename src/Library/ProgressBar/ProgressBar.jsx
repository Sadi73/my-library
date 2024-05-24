import React from 'react';
const styles = {
    progress: {
        height: '5px',
        width: '100%',
        position: 'relative',
    },
    bar: {
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        borderRadius: '3px',
        'WebkitTransition': 'width 10s ease-in-out',
        transition: 'width 10s ease-in-out',
        background: 'white',
        width: '100%',
    },
    percent: {
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: '3px',
        'WebkitTransition': 'width 10s ease -in -out',
        transition: 'width 10s ease -in -out',
        background: 'rgba(44, 60, 81, 1)',
        width: '1%',
    }
}
const ProgressBar = (props) => {
    return (
        <>
            <div style={styles.progress}>
                <div style={{ ...styles.bar, background: '#D9D9D9' }}></div>
                <div style={{
                    ...styles.percent, width: props?.value, background: props?.backgroundColor ? props?.backgroundColor : '#04AD4C'
                }}>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
