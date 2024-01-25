import React from "react";
import {TbFaceIdError} from 'react-icons/tb';
import './Styling/errorfound.css';
function Errorfound()
{
    return(
        <div className="errorPage">
        <TbFaceIdError id='errorIcon'></TbFaceIdError>
            <h1>
            Oops !!! Something unexpected occured
            </h1>
        </div>
    )
}
export default Errorfound;