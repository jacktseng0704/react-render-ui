import React from 'react';
import './StatusBar.scss';

function StatusBar({ status }) {
    return (
        <div className='status-bar'>
            <span className='status-title'>{status}</span>
        </div>
    );
}

export default StatusBar;
