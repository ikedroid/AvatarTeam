import React from 'react'

const ButtonField = ({
    type="button",
    children,
    ...rest
}) => {
    return (
        <button
            type={type}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonField
