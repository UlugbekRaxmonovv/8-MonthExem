import React from 'react';
import './Single.scss'

const Single = ({detail}) => {
    return (
        <div>
               <div className="singli">
                <div className="singli_rout">
            <img src={detail.url} width={200} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Single;
