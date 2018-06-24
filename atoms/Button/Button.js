import React from 'react';
import ButtonStyleFactory from './Button.css';

export const Button = ({
    onClick,
    children,
    type,
    loading,
    size,
    shape
}) => {
     
    return <button style={ButtonStyleFactory({
       type,
       loading,
       size,
       shape
    })} onClick={onClick}>
    {children}</button>
}