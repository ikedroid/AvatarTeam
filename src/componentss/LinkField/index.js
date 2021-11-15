import React from 'react'
import './style.css'

const LinkField = ({
    text=false,
    children,
    link="/",
    nav=false
}) => {
    return (
        nav ?
        <li>
            <a
                href={link}
            >
                {text}
            </a>
        </li>
        :
        <a
            href={link}
        >
            {text ? text : children}
        </a>

    )
}

export default LinkField
