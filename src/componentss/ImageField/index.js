import React from 'react'

const ImageField = ({
    image,
    alt,
    ...rest
}) => {
    return (
        <img
            src={image}
            alt={alt}
            {...rest}
        />
    )
}

export default ImageField
