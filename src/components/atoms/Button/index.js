import React from 'react';
import StyledButtonFactory from './Button.css';

const RawButton = ({
    onClick,
    children,
    loading,
    className
}) => <button onClick={!loading ? onClick: ""} className={className}>{children}</button>;

export const Button = StyledButtonFactory(RawButton)