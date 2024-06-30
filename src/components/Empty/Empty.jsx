import React from 'react';
import rasm from '../../assets/img/empty.png'

const Empty = () => {
    return (
        <div style={{textAlign:"center",marginTop:'20px'}}>
        <img src={rasm} width={250} alt="" />
        <h2>Empty</h2>
    </div>
    );
}

export default Empty;
