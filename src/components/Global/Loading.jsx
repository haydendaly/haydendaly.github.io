import React from 'react';
import Spinner from 'react-spinkit';

const Loading = ({ height, width}) => (
    <div style={{ height: height + 10, width: width }}>
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Spinner name='cube-grid' />
        </div>
    </div>
);

export default Loading;
