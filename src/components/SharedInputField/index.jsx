import React from 'react'
import { InputLabel, InputWrapper, StyledInputWrapper } from './style'

const SharedInputField = (props) => {
    const { label, placeholder } = props
    return (
        <StyledInputWrapper>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <InputWrapper type="text" name="" id={label} placeholder={placeholder} />
        </StyledInputWrapper>
    )
}

export default SharedInputField