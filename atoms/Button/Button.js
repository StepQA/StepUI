import React from 'react';
import StyledButtonFactory from './Button.css';

export const Button = ({
    onClick,
    children,
    type,
    loading,
    size,
    shape
}) => {
     const StyledButton = StyledButtonFactory({
         type,
       loading,
       size,
       shape
     })
    return <StyledButton onClick={!loading ? onClick: ""}>{children}</StyledButton>
    
}