import React from 'react';
import Loader from '../../Images/ICON/preloader.gif'
const Preloader = (props) => {
    return (
        <div className="text-center col-12 py-5 my-5" style={{display: props.visibility}}>
            <img src={Loader} alt=""/>
        </div>
    );
};

export default Preloader;