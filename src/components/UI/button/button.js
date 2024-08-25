import React from 'react';
import classes from "./button.module.scss";
const Button = ({children, color, onClick}) => {
    let btnColor;
    switch (color) {
        case 'light-grey':
            btnColor = classes.lightGrey;
            break
        case 'dark-grey':
            btnColor = classes.darkGrey;
            break
        case 'blue':
            btnColor = classes.blue;
            break
        default:
            btnColor = classes.blue;
            break
    }
    return (
        <button className={`${classes.btn} ${btnColor}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;