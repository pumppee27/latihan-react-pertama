import React from "react";
import {PropTypes} from 'prop-types'
import '../styles/Button.css'

function Button({text, variant, action}){
    return(
        <div>
            <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func
}

export default Button