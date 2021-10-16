import React from 'react'
import './ButtonStyle.css'

const Button = ( {link, text} ) => {
    return (
        <div>
            <div class="info-btn">
                <a target='_blank' href={link} ><button id="bn30">{text}</button></a>
            </div>
        </div>
    )
}

export default Button
