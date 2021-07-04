import React from 'react'

const Link = ({href,content}) => {
    return (
        <>
            <a href={href} target="_blank" rel="noreferrer">{content} </a>
        </>
    )
}

export default Link
