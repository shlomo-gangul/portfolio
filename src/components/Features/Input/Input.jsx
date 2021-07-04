import React from 'react'
import { TextField } from "@material-ui/core";
const Input = ({name,type,label,id,variant}) => {
    return (
        <>
        <label>
        <TextField
            name={name}
            type={type}
            label={label}
            id={id}
            multiline
            variant={variant}
            />
            </label>
        </>
    )
}

export default Input
