import React from 'react'
import '../../styles/common/Button.scss'


function Button(props) {

    return <button id={props.id}
        className='button'
        onClick={props.action}
    >
        {props.text}
    </button>
}

export default Button;