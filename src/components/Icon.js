import React from "react";
import {FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = ({ name }) => {
    switch (name) {
        case 'Circle':
            return <FaRegCircle className="icon"/>
        case 'Cross':
            return <FaTimes className="icon"/>
        default:
            return <FaPen className="icon"/>
    }

    // return (
    //     <div>
    //         <FaTimes className="icon" />
    //         <FaPen className="icon" />
    //         <h2>SAM</h2>
    //         <FaRegCircle className="icon" />
    //     </div>
    // );
}

export default Icon;