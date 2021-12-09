import React from 'react'
import './ButtonStyle.css'

const Button = ( {link, text, targetTo} ) => {
    return (
        <div>
            <a target={ !targetTo ? '_blank' : targetTo } href={ link }>
                <button id="bn30"> { text } </button>
            </a>
        </div>
    )
}

export default Button
