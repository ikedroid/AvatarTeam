import React from 'react'

const InputField = ({
    type="text",
    ...rest
}) => {
    return (
        <input
            type={type}
            {...rest}
        >
        </input>
    )
}

export default InputField
